// models/Certificate.js
const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  certificateId: { type: String, required: true, unique: true },
  studentName: { type: String, required: true },
  internshipName: { type: String, required: true },
  certificateDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Certificate', CertificateSchema);
