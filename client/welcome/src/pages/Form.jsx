import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const Form = () => {
  return (
    
    <div className='Form1'>
      <form className='Form2'>
      <h2>Registration Form</h2>
      <div className="Gmail">
          <Link to="/EmailOtp">
            <button className='btn-success '>
              Continue with Gmail
            </button>
          </Link>
          <p>or</p>
          <Link to="/phnumber">
            <button className='btn-success ' >
              PhoneNumber
            </button>
          </Link>
        
        <Link to="/Signup">Don't have an account? Sign Up</Link>
        </div>
        </form>
      </div>
      
    
  );
}

export default Form;



  