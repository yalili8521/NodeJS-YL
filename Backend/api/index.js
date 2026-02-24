require('dotenv').config();
const app = require('../src/app');
const connectDB = require('../src/config/database');

// Connect to MongoDB once (cached across warm invocations)
connectDB();

module.exports = app;
