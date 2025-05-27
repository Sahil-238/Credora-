import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UploadCertificate = () => {
  const [name, setName] = useState('');
  const [domain, setDomain] = useState('');
  const [certificateId, setCertificateId] = useState('');
  const [dateOfCompletion, setDateOfCompletion] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !domain.trim() || !certificateId.trim() || !dateOfCompletion.trim()) {
      setMessage('Please fill all fields.');
      return;
    }

    const data = {
      name: name.trim(),
      domain: domain.trim(),
      certificateId: certificateId.trim(),
      dateOfCompletion: dateOfCompletion.trim(),
    };

    try {
      const response = await axios.post('/api/certificates', data);
      setMessage('Certificate information saved successfully!');
      setTimeout(() => {
        navigate('/certificates/' + response.data._id);
      }, 1500);
    } catch (error) {
      setMessage('Failed to save certificate information.');
      console.error(error);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Add Certificate Information</h2>
      <form onSubmit={handleSubmit} style={formStyle} noValidate>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
          aria-label="Name"
        />
        <input
          type="text"
          placeholder="Domain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          style={inputStyle}
          required
          aria-label="Domain"
        />
        <input
          type="text"
          placeholder="Certificate ID"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
          style={inputStyle}
          required
          aria-label="Certificate ID"
        />
        <input
          type="date"
          placeholder="Date of Completion"
          value={dateOfCompletion}
          onChange={(e) => setDateOfCompletion(e.target.value)}
          style={inputStyle}
          required
          aria-label="Date of Completion"
        />
        <button type="submit" style={buttonStyle}>Save</button>
      </form>
      {message && <p style={messageStyle}>{message}</p>}
    </div>
  );
};

const containerStyle = {
  maxWidth: '600px',
  margin: '40px auto',
  padding: '30px',
  borderRadius: '12px',
  backgroundColor: '#f8fafc',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

const headingStyle = {
  color: '#2563eb',
  fontWeight: '700',
  fontSize: '28px',
  marginBottom: '24px',
  fontFamily: "'Poppins', sans-serif",
  textAlign: 'center',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const inputStyle = {
  padding: '12px 16px',
  fontSize: '16px',
  borderRadius: '8px',
  border: '1px solid #cbd5e1',
  outline: 'none',
  transition: 'border-color 0.3s ease',
};

const buttonStyle = {
  padding: '14px',
  fontSize: '16px',
  backgroundColor: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  transition: 'background-color 0.3s ease',
};

const messageStyle = {
  marginTop: '16px',
  textAlign: 'center',
  fontWeight: '600',
  color: '#2563eb',
};

export default UploadCertificate;
