import React, { useState } from 'react';
import axios from 'axios';
import './Otpverifycss.css';
import { useNavigate } from 'react-router-dom';

const OtpForm = () => {
  const [otp, setOtp] = useState('');
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/verify-otp', {
        otp
      });
      if (response.status === 200) {
        alert('OTP verified successfully!');
        Navigate('/');

        
      } else {
        alert('Failed to verify OTP.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Failed to verify OTP.');
    }
    

  };


  return (
    <div className="Form3">
    <form  onSubmit={handleSubmit}>
      <div className='Form4'>
        <label>
          OTP:
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            placeholder="Enter the OTP"
          />
        </label>
        <button type="submit" className="btn-success">Verify OTP</button>

      </div>
    </form>
    </div>
  );

};
export default OtpForm;