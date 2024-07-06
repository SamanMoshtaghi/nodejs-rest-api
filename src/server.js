const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'An unexpected error occurred' });
});


// Routes
app.use('/users', require('./routes/userRoutes'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
