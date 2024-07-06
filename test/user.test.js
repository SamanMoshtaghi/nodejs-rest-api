const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const User = require('../src/models/userModel');
const app = require('../src/server');

describe('User API', () => {
    before((done) => {
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection.once('open', () => done());
    });

    after((done) => {
        mongoose.connection.close(() => done());
    });

    // Add your test cases here
});
