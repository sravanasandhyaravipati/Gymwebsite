import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './Login.css';


const LoginForm = () => {
  return (
    <div className="bg-img">
      <div className="content">
        <header>Registeration Form</header>
        <form action="#">
          <div className="field">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" required placeholder="Email" />
          </div>
          <h6>Or Register with</h6>
          <div className="field space">
            <FontAwesomeIcon icon={faLock} />
            <input type="number" className="pass-key" required placeholder="Phone Number" />
            <span className="show">SHOW</span>
          </div>
          <div className="pass">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="field">
            <input type="submit" value="LOGIN" />
          </div>
        </form>
        
        </div>
      </div>
    
  );
};

export default LoginForm;
