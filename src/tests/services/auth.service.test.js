const { userLogin, userLogout } = require('../../services/auth.service');
const { User } = require('../../database/models');

// Mock the User model
jest.mock('../../database/models', () => ({
  User: {
    findOne: jest.fn(),
  },
}));

describe('authService unit tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('userLogin', () => {
    // it() and test() are interchangeable
    it('should return a user when found with matching email and passwordHash', async () => {
      const mockUser = { id: 1, email: 'test@example.com' };
      User.findOne.mockResolvedValue(mockUser);

      const result = await userLogin('test@example.com', 'hash123');

      expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'test@example.com', passwordHash: 'hash123' } });
      expect(result).toEqual(mockUser);
    });

    it('should return null when no matching user found', async () => {
      User.findOne.mockResolvedValue(null);

      const result = await userLogin('wrong@example.com', 'wronghash');

      expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'wrong@example.com', passwordHash: 'wronghash' } });
      expect(result).toBeNull();
    });

    it('should throw error if User.findOne throws', async () => {
      User.findOne.mockRejectedValue(new Error('DB error'));

      await expect(userLogin('fail@example.com', 'failhash')).rejects.toThrow('DB error');
    });
  });

  describe('userLogout', () => {
    it('should return true', async () => {
      const result = await userLogout();
      expect(result).toBe(true);
    });
  });
});


// Test type 2
// test('should return a user when found with matching email and passwordHash', async () => {
//       const mockUser = { id: 1, email: 'test@example.com' };
//       User.findOne.mockResolvedValue(mockUser);

//       const result = await userLogin('test@example.com', 'hash123');

//       expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'test@example.com', passwordHash: 'hash123' } });
//       expect(result).toEqual(mockUser);
//     });

// test('object assignment', () => {
//   const data = {one: 1};
//   data['two'] = 2;
//   expect(data).toEqual({one: 1, two: 2});
// });