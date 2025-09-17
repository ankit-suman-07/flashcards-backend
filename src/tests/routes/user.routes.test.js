// src/tests/routes/user.routes.test.js
const express = require('express');
const request = require('supertest');
const router = require('../../routes/user.routes');
const userController = require('../../controllers/user.controller');

jest.mock('../../controllers/user.controller');

describe('User Routes', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/api/users', router);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/users', () => {
    it('should call getAllUsers controller', async () => {
      userController.getAllUsers.mockImplementation((req, res) => res.status(200).json([{ id: 1 }]));

      const res = await request(app).get('/api/users');

      expect(userController.getAllUsers).toHaveBeenCalled();
      expect(res.status).toBe(200);
      expect(res.body).toEqual([{ id: 1 }]);
    });
  });

  describe('POST /api/users/register', () => {
    it('should call registerUser controller', async () => {
      const mockUser = { id: '123', userName: 'alice' };
      userController.registerUser.mockImplementation((req, res) => res.status(201).json(mockUser));

      const res = await request(app).post('/api/users/register').send({ userName: 'alice' });

      expect(userController.registerUser).toHaveBeenCalled();
      expect(res.status).toBe(201);
      expect(res.body).toEqual(mockUser);
    });
  });

  describe('GET /api/users/:userId', () => {
    it('should call getUserProfile controller', async () => {
      const mockUser = { id: '123', userName: 'bob' };
      userController.getUserProfile.mockImplementation((req, res) => res.status(200).json(mockUser));

      const res = await request(app).get('/api/users/123');

      expect(userController.getUserProfile).toHaveBeenCalled();
      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockUser);
    });
  });

});
