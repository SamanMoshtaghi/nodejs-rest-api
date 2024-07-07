const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../src/server');
const User = require('../src/models/User');

let mongoServer;

describe('User API', () => {
    beforeAll(async (done) => {
        mongoServer = await MongoMemoryServer.create();
        const url = mongoServer.getUri();
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        done();
    }, 30000);

    afterAll(async (done) => {
        await mongoose.connection.close();
        await mongoServer.stop();
        done();
    }, 30000);

    afterEach(async (done) => {
        await User.deleteMany({});
        done();
    });

    it('should fetch all users', async (done) => {
        const user1 = new User({ name: 'John Doe', email: 'john@example.com' });
        const user2 = new User({ name: 'Jane Doe', email: 'jane@example.com' });

        await user1.save();
        await user2.save();

        const res = await request(app).get('/users');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(2);
        done();
    });

    it('should return 500 on database error', async (done) => {
        const findStub = jest.spyOn(User, 'find').mockImplementation(() => {
            throw new Error('Database error');
        });

        const res = await request(app).get('/users');
        expect(res.status).toBe(500);

        findStub.mockRestore();
        done();
    });
});
