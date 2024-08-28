import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateAccount from './Pages/CreateAccount';
import Login from './Pages/login';
import FormComponent from './Pages/userprofile';
import DashBoard from './Pages/privatejobs';
import './index.css';
import Govjobs from './Pages/govjobs';
import PrivateIntern from './Pages/privateInternship';
import Overseasjobs from  './Pages/overseasjobs';
import VideoCallLayout from './Pages/MockInterview';

import Jobfinder from './Pages/jobfinder';

const App = () => {
  return (
    <Router>
       
    <Routes>
      <Route path="/" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userprofile" element={<FormComponent />} />
      <Route path="/Jobs/Private" element={<DashBoard />} />
      <Route path="/Jobs/Government" element={<Govjobs />} />
      <Route path="/Jobs/Overseas" element={<Overseasjobs />} />
      <Route path="/Internship/Private" element={<PrivateIntern />} />
      <Route path="/mock" element={<VideoCallLayout />} />
      <Route path="/bigcard" element={<Jobfinder />} />
    </Routes>
  </Router>
  );
};

export default App;
