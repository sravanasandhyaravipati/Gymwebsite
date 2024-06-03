// App.js
import React from 'react';


import GymWebsite from './pages/Gymwebsite';

import Form from './pages/Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<GymWebsite/>}/>
        <Route path='/Form' element={<Form/>}/>
      </Routes>
    </Router>
  );
};

export default App;
