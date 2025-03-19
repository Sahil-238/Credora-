// src/pages/Certificate.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Certificate = () => {
  const [certificate, setCertificate] = useState(null);
  const { id } = useParams(); // extract certificate id from URL

  useEffect(() => {
    axios.get(`/api/certificates/${id}`)
      .then(response => {
        setCertificate(response.data);
      })
      .catch(error => {
        console.error("Error fetching certificate:", error);
      });
  }, [id]);

  if (!certificate) return <div style={pageStyle}>Loading certificate...</div>;

  return (
    <div style={pageStyle}>
      <h2>Certificate of Completion</h2>
      <p>This certificate is awarded to <strong>{certificate.studentName}</strong></p>
      <p>For successfully completing the internship: <strong>{certificate.internshipTitle}</strong></p>
      {/* Future Enhancement: Add a button to download the certificate */}
    </div>
  );
};

const pageStyle = {
  padding: '20px',
  textAlign: 'center'
};

export default Certificate;
