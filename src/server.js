const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', require('./routes/userRoutes'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
