const request = require('supertest');
const db = require('../database/dbConfig.js');
const server = require('../api/server.js');

describe('Auth router', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('POST /register', () => {
        it('201 means good', () => {
            return request(server)
                .post('/api/auth/register')
                .send({ username: 'myfatcat', password: 'fatcat'})
                .then(res => {
                    expect(res.status).toBe(201)
                });
        });

        it('Return 500 if missing credentials', () => {
            return request(server)
                .post('/api/auth/register')
                .send({ username: 'test2'})
                .then(res => {
                    expect(res.status).toBe(500);
                });
        });
    });

    describe('POST /login', () => {
        it('Should return 401 Invalid Creds', () => {
            return request(server)
                .post('/api/auth/login')
                .send({ username: '', password: ''})
                .then(res => {
                    expect(res.status).toBe(401);
                });
        });

        it('Should returnn 500', () => {
            return request(server)
                .post('/api/auth/login')
                .send({ user: 'username', password: 5})
                .then(res => {
                    expect(res.status).toBe(500);
                });
        });
    });
});