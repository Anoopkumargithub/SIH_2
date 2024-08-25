import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateAccount from './Pages/CreateAccount';
import Login from './Pages/login';
import FormComponent from './Pages/userprofile';
import DashBoard from './Pages/dashboard';
import './index.css';

const App = () => {
  return (
    <Router>
       
    <Routes>
      <Route path="/" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userprofile" element={<FormComponent />} />
      <Route path="/dashboard" element={<DashBoard />} />
      
    </Routes>
  </Router>
  );
};

export default App;
