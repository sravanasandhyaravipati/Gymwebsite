// src/components/LoginPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Formcss.css';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [passcode] = useState('ASD@12asd');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send-otp', {
        phoneNumber,
        passcode
      });
      if (response.status === 200) {

        alert('OTP sent successfully');
        navigate('/otpVerification');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please check your passcode and phone number.');
    }
  };



  return (
    <div className="login-page">
      <Helmet>
        <title>Login - Gym Website</title>
        <meta name="description" content="Login to access your gym account." />
      </Helmet>
      
      <div className='container'>
    <div className='P'>
        <form onSubmit={handleSubmit}>
      <div className='P1'>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit btn-success">Send OTP</button>
    </form>
    </div>
    </div>
      {/* Add your login form and other content here */}
    </div>
  );
};

export default LoginPage;
