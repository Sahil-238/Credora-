// server.js
require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const certificateRoutes = require('./routes/certificates');
const userRoutes = require('./routes/users');
const internshipRoutes = require('./routes/internships');

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); // Parse JSON bodies


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// // Connect to PostgreSQL (only for chat interactions)
// const { Pool } = require('pg');

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@0.0.0.0:5432/credora'
// });

// pool.connect()
//   .then(() => console.log('PostgreSQL connected successfully'))
//   .catch(err => console.error('PostgreSQL connection error:', err));


// Routes
app.use('/api/certificates', certificateRoutes);
app.use('/api/users', require('./routes/users'));
app.use('/api/internships', internshipRoutes);
app.use('/api/chat', require('./routes/chat'));



// A simple test route
app.get('/', (req, res) => {
  res.send('Hello from Credora Backend!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
