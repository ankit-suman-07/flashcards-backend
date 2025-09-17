const { registerUser, getAllUsers, getUserProfile, getUserStats } = require('../../services/user.service');
const { User } = require('../../database/models');

jest.mock('../../database/models', () => ({
  User: {
    create: jest.fn(),
    findAll: jest.fn(),
    findByPk: jest.fn(),
  },
}));

describe('userService unit tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('registerUser', () => {
    it('should create a new user and return it', async () => {
      const mockUser = {
        id: '123',
        userName: 'mary_jane',
        email: 'mary@jane.com',
        passwordHash: 'mary1234',
        fullName: 'Mary Jane',
      };

      User.create.mockResolvedValue(mockUser);

      const result = await registerUser(mockUser);

      expect(User.create).toHaveBeenCalledWith(mockUser);
      expect(result).toEqual(mockUser);
    });

    it('should throw validation error on invalid data', async () => {
      const error = new Error('Validation error');
      error.name = 'SequelizeValidationError';

      User.create.mockRejectedValue(error);

      await expect(registerUser({})).rejects.toThrow('Validation error');
    });

    it('should throw unique constraint error on duplicate user', async () => {
      const error = new Error('Unique constraint error');
      error.name = 'SequelizeUniqueConstraintError';

      User.create.mockRejectedValue(error);

      await expect(registerUser({
        userName: 'existing_user',
        email: 'existing@example.com',
        passwordHash: 'password123',
        fullName: 'Existing User'
      })).rejects.toThrow('Unique constraint error');
    });
  });

  describe('getAllUsers', () => {
  it('should return all users', async () => {
    const mockUsers = [{ id: 1, userName: 'user1' }, { id: 2, userName: 'user2' }];
    User.findAll.mockResolvedValue(mockUsers);

    const result = await getAllUsers();

    expect(User.findAll).toHaveBeenCalled();
    expect(result).toEqual(mockUsers);
  });

  it('should throw error if database error occurs', async () => {
    const error = new Error('Database error');
    User.findAll.mockRejectedValue(error);

    await expect(getAllUsers()).rejects.toThrow('Database error');
  });
});


  describe('getUserProfile', () => {
  it('should return user profile if found', async () => {
    const mockUser = { id: '123', userName: 'john' };
    User.findByPk.mockResolvedValue(mockUser);

    const result = await getUserProfile('123');

    expect(User.findByPk).toHaveBeenCalledWith('123');
    expect(result).toEqual(mockUser);
  });

  it('should return null if user not found', async () => {
    User.findByPk.mockResolvedValue(null);

    const result = await getUserProfile('nonexistent-id');

    expect(result).toBeNull();
  });

  it('should throw error if database error occurs', async () => {
    const error = new Error('Database failure');
    User.findByPk.mockRejectedValue(error);

    await expect(getUserProfile('123')).rejects.toThrow('Database failure');
  });
});


  describe('getUserStats', () => {
    it('should return default stats message', async () => {
      const result = await getUserStats();

      expect(result).toEqual({ message: "Stats endpoint not set right now!!!" });
    });
  });
});
