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
app.use(cors());
app.use(express.json()); // Parse JSON bodies


// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/credoraDB';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));


// Routes
app.use('/api/certificates', certificateRoutes);
app.use('/api/users', require('./routes/users'));
app.use('/api/internships', internshipRoutes);



// A simple test route
app.get('/', (req, res) => {
  res.send('Hello from Credora Backend!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
