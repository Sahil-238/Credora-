// src/api/api.js
import axios from 'axios';

const API_BASE_URL = `${process.env.REACT_APP_API_URL}/api`; // Update this URL to your backend's base URL

export const getInternships = () => axios.get(`${API_BASE_URL}/internships`);
export const getInternshipById = (id) => axios.get(`${API_BASE_URL}/internships/${id}`);
export const getCertificateById = (id) => axios.get(`${API_BASE_URL}/certificates/${id}`);
