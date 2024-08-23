import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import Login from './components/login';
import './index.css';

const App = () => {
  return (
    <Router>
       
    <Routes>
      <Route path="/" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  );
};

export default App;
