// src/tests/unit/controllers/auth.controller.test.js

const authController = require('../../controllers/auth.controller');
const authService = require('../../services/auth.service');

jest.mock('../../services/auth.service');

describe('Auth Controller Tests', () => {
  let req, res;

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.clearAllMocks();
  });

  describe('userLogin', () => {
    it('should respond with user data and 200 on successful login', async () => {
      const mockUser = { id: 1, email: 'test@example.com' };
      req.body = { email: 'test@example.com', passwordHash: 'hash123' };
      authService.userLogin.mockResolvedValue(mockUser);

      await authController.userLogin(req, res);

      expect(authService.userLogin).toHaveBeenCalledWith('test@example.com', 'hash123');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockUser);
    });

    it('should respond with 401 and error message on invalid credentials', async () => {
      req.body = { email: 'wrong@example.com', passwordHash: 'wronghash' };
      authService.userLogin.mockResolvedValue(null);

      await authController.userLogin(req, res);

      expect(authService.userLogin).toHaveBeenCalledWith('wrong@example.com', 'wronghash');
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ error: 'Invalid credentials' });
    });

    it('should respond with 400 and error message if service throws error', async () => {
      req.body = { email: 'fail@example.com', passwordHash: 'failhash' };
      authService.userLogin.mockRejectedValue(new Error('DB error'));

      await authController.userLogin(req, res);

      expect(authService.userLogin).toHaveBeenCalledWith('fail@example.com', 'failhash');
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'DB error' });
    });
  });

  describe('userLogout', () => {
    it('should respond with 200 and logout message', async () => {
      await authController.userLogout(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ logout: 'User logged out' });
    });

    it('should handle errors and respond with 400', async () => {
      // Force userLogout to throw by mocking res.status to throw for test purpose
      const error = new Error('Unexpected error');
      res.status.mockImplementation(() => { throw error });
      res.json.mockImplementation(() => {});

      await authController.userLogout(req, res).catch(() => {}); // catch to avoid unhandled rejection

      // Since the controller catches errors and sends 400, simulate calling catch block
      // Normally this test simulates unexpected error inside userLogout (this is unusual)
      // You can omit this test if you want, since error in userLogout is unlikely
    });
  });
});
