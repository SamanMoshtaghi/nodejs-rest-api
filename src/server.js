const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Cross-Origin Resource Sharing
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const swaggerDocs = require('./swagger/swaggerConfig');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // enable CORS

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'An unexpected error occurred' });
});


// Routes
app.use('/users', require('./routes/userRoutes'));

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to Building a RESTful API with Node.js. Swagger documentation: /api-docs');
});

// Swagger
swaggerDocs(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
