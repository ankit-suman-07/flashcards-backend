const userController = require('../../controllers/user.controller');
const userService = require('../../services/user.service');

jest.mock('../../services/user.service');

describe('User Controller', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.clearAllMocks();
  });

  describe('getAllUsers', () => {
    it('should return 200 status and all users on success', async () => {
      const mockUsers = [{ id: 1 }, { id: 2 }];
      userService.getAllUsers.mockResolvedValue(mockUsers);

      await userController.getAllUsers(req, res);

      expect(userService.getAllUsers).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockUsers);
    });

    it('should return 500 on service error', async () => {
      const error = new Error('DB error');
      userService.getAllUsers.mockRejectedValue(error);

      await userController.getAllUsers(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'DB error' });
    });
  });

  describe('registerUser', () => {
    it('should create user and return 201 and user JSON on success', async () => {
      const mockUser = { id: '123', userName: 'john' };
      req.body = mockUser;

      userService.registerUser.mockResolvedValue(mockUser);

      await userController.registerUser(req, res);

      expect(userService.registerUser).toHaveBeenCalledWith(mockUser);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockUser);
    });

    it('should return 400 on service error', async () => {
      const error = new Error('Validation error');
      req.body = {};

      userService.registerUser.mockRejectedValue(error);

      await userController.registerUser(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Validation error' });
    });
  });

  describe('getUserProfile', () => {
    it('should return 200 and user if found', async () => {
      const mockUser = { id: '123', userName: 'jane' };
      req.params = { userId: '123' };
      userService.getUserProfile.mockResolvedValue(mockUser);

      await userController.getUserProfile(req, res);

      expect(userService.getUserProfile).toHaveBeenCalledWith('123');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockUser);
    });

    it('should return 404 if user not found', async () => {
      req.params = { userId: 'nonexistent' };
      userService.getUserProfile.mockResolvedValue(null);

      await userController.getUserProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'User not found' });
    });

    it('should return 400 on error', async () => {
      const error = new Error('DB error');
      req.params = { userId: 'badid' };
      userService.getUserProfile.mockRejectedValue(error);

      await userController.getUserProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'DB error' });
    });
  });

  // describe('getUserStats', () => {
  //   it('should return 200 and stats', async () => {
  //     const mockStats = { message: 'Stats endpoint not set right now!!!' };
  //     userService.getUserStats.mockResolvedValue(mockStats);

  //     await userController.getUserStats(req, res);

  //     expect(userService.getUserStats).toHaveBeenCalled();
  //     expect(res.status).toHaveBeenCalledWith(200);
  //     expect(res.json).toHaveBeenCalledWith(mockStats);
  //   });

  //   it('should return 400 if error thrown', async () => {
  //     const error = new Error('Some error');
  //     userService.getUserStats.mockRejectedValue(error);

  //     await userController.getUserStats(req, res);

  //     expect(res.status).toHaveBeenCalledWith(400);
  //     expect(res.json).toHaveBeenCalledWith({ error: 'Some error' });
  //   });
  // });
});
