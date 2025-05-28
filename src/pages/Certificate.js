// src/pages/Certificate.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// TODO: Replace the following user object with your actual auth user object
const user = { role: 'admin' }; // Placeholder admin user

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

  const handleUploadClick = () => {
    document.getElementById('uploadInput').click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('certificateFile', file);
    // For demonstration, using hardcoded studentName and internshipTitle
    formData.append('studentName', 'Demo Student');
    formData.append('internshipTitle', 'Demo Internship');

    try {
      const response = await axios.post('/api/certificates', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Certificate uploaded successfully!');
      setCertificate(response.data);
    } catch (error) {
      console.error('Error uploading certificate:', error);
      alert('Failed to upload certificate.');
    }
  };

  if (!certificate) return <div style={pageStyle}>Loading certificate...</div>;

  return (
    <div style={pageStyle}>
      <h2>Certificate of Completion</h2>
      <p>This certificate is awarded to <strong>{certificate.studentName}</strong></p>
      <p>For successfully completing the internship: <strong>{certificate.internshipTitle}</strong></p>

      {user.role === 'admin' && (
        <>
          <button onClick={handleUploadClick} style={buttonStyle}>Upload Certificate</button>
          <input
            type="file"
            id="uploadInput"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            accept=".pdf,.jpg,.png"
          />
        </>
      )}
    </div>
  );
};

const pageStyle = {
  padding: '20px',
  textAlign: 'center'
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer'
};

export default Certificate;
