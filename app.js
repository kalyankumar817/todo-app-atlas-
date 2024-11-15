const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: '*', // Allow all origins or specify specific origins
}));

// Environment variables
const port = process.env.PORT;
const mongouri = process.env.MONGODB_URI;

// Mongoose Connection
mongoose
    .connect(mongouri)
    .then(() => console.log('Connected to MongoDB Atlas successfully'))
    .catch((err) => console.error('Error in establishing connection to MongoDB Atlas', err));

// Routes
app.use('/api/todos', todoRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
