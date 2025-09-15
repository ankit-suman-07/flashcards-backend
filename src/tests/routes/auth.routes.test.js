
const request = require('supertest');
const express = require('express');
const authRoutes = require('../../routes/auth.routes');

// Mock the auth controller to isolate tests if needed
jest.mock('../../controllers/auth.controller', () => ({
  userLogin: jest.fn((req, res) => {
    const { email, passwordHash } = req.body;
    if (email === 'test@example.com' && passwordHash === 'hash123') {
      return res.status(200).json({ id: 1, email });
    } else {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  }),
  userLogout: jest.fn((req, res) => res.status(200).json({ logout: 'User logged out' })),
}));

describe('Auth Routes Integration Test', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/api/auth', authRoutes);
  });

  test('POST /api/auth/login - success', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', passwordHash: 'hash123' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ id: 1, email: 'test@example.com' });
  });

  test('POST /api/auth/login - invalid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'wrong@example.com', passwordHash: 'wronghash' });

    expect(res.statusCode).toBe(401);
    expect(res.body).toEqual({ error: 'Invalid credentials' });
  });

  test('POST /api/auth/logout - success', async () => {
    const res = await request(app)
      .post('/api/auth/logout')
      .send();

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ logout: 'User logged out' });
  });
});
