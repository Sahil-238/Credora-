// routes/certificates.js
const express = require('express');
const router = express.Router();
const Certificate = require('../models/Certificate');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/certificates';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// POST endpoint to add a new certificate with file upload
router.post('/', upload.single('certificateFile'), async (req, res) => {
  try {
    const { studentName, internshipTitle } = req.body;
    const certificateFile = req.file ? req.file.filename : null;

    if (!studentName || !internshipTitle || !certificateFile) {
      return res.status(400).json({ message: 'Missing required fields or file' });
    }

    const newCertificate = new Certificate({
      studentName,
      internshipTitle,
      certificateFile
    });

    const savedCertificate = await newCertificate.save();
    res.status(201).json(savedCertificate);
  } catch (error) {
    console.error('Error creating certificate:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET certificate by certificateId
router.get('/:certificateId', async (req, res) => {
  const { certificateId } = req.params;
  try {
    const certificate = await Certificate.findOne({ certificateId });
    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }
    res.json(certificate);
  } catch (error) {
    console.error('Error fetching certificate:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
