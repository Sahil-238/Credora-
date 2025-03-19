// src/pages/InternshipDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const InternshipDetail = () => {
  const { id } = useParams();
  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/internships/${id}`)
      .then(response => {
        setInternship(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching internship details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>;
  if (error) return <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>{error}</div>;

  // Determine the Google Form URL based on internship category
  let googleFormUrl = "https://forms.gle/oQbxp8PJ1caBqth97";
  if (internship.category === 'python') {
    googleFormUrl = "https://forms.gle/NK9u73sRHVVCGm8q7";
  } else if (internship.category === 'java') {
    googleFormUrl = "https://forms.gle/ujCcERYwuyPU1d4E9";
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{internship.title}</h1>
      <p>{internship.description}</p>
      <a 
        href={googleFormUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={applyButtonStyle}
      >
        Apply Now
      </a>
    </div>
  );
};

const applyButtonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#0d9488',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '8px',
  marginTop: '20px'
};

export default InternshipDetail;
