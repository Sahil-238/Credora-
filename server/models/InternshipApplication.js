// models/InternshipApplication.js
const mongoose = require('mongoose');

const InternshipApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  domain: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('InternshipApplication', InternshipApplicationSchema);
