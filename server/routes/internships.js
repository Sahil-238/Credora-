// routes/internships.js
const express = require('express');
const router = express.Router();
const InternshipApplication = require('../models/InternshipApplication'); // Import the model

// Sample internship data
const internships = [
  {
    id: 1,
    title: "Frontend Development Internship",
    description: "Learn React and build UI components",
    category: "web"
  },
  {
    id: 2,
    title: "Python Data Analysis Internship",
    description: "Gain hands-on experience in data analysis using Python",
    category: "python"
  },
  {
    id: 3,
    title: "Java Backend Development Internship",
    description: "Work on backend systems using Java and Spring Boot",
    category: "java"
  }
];

// GET all internships
router.get('/', (req, res) => {
  res.json(internships);
});

// Optional: GET a single internship by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const internship = internships.find(item => item.id === id);
  if (internship) {
    res.json(internship);
  } else {
    res.status(404).json({ message: 'Internship not found' });
  }
});
// POST route for internship applications
router.post('/apply', async (req, res) => {
    const { name, email, domain, message } = req.body;
    
    // Basic validation
    if (!name || !email || !domain) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }
    
    try {
      // Create and save a new internship application
      const application = new InternshipApplication({ name, email, domain, message });
      await application.save();
      return res.status(201).json({ message: 'Application submitted successfully!' });
    } catch (error) {
      console.error("Error saving application:", error);
      return res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
