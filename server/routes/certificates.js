// // server/routes/certificates.js
// const express = require('express');
// const router = express.Router();
// const Certificate = require('../models/Certificate');

// // GET certificate by certificateId
// router.get('/:certificateId', async (req, res) => {
//   const { certificateId } = req.params;
//   try {
//     const certificate = await Certificate.findOne({ certificateId });
//     if (!certificate) {
//       return res.status(404).json({ message: 'Certificate not found' });
//     }
//     res.json(certificate);
//   } catch (error) {
//     console.error('Error fetching certificate:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // POST endpoint to add a new certificate
// router.post('/', async (req, res) => {
//   try {
//     const newCertificate = new Certificate(req.body);
//     const savedCertificate = await newCertificate.save();
//     res.status(201).json(savedCertificate);
//   } catch (error) {
//     console.error('Error creating certificate:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;



// routes/certificates.js
const express = require('express');
const router = express.Router();
const Certificate = require('../models/Certificate');

// POST endpoint to add a new certificate
router.post('/', async (req, res) => {
  try {
    const newCertificate = new Certificate(req.body);
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
