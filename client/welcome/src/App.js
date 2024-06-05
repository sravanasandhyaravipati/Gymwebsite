// App.js
import React from 'react';


import GymWebsite from './pages/Gymwebsite';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Form';
import OtpForm from './pages/Otpverify';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<GymWebsite/>}/>
        <Route path='/Form' element={<LoginPage/>}/>
        <Route path='/Otpverify' element={<OtpForm/>}/>
      </Routes>
    </Router>
  );
};

export default App;
