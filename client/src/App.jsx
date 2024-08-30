import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateAccount from './Pages/CreateAccount';
import Login from './Pages/login';
import FormComponent from './Pages/userprofile';
import DashBoard from './Pages/privatejobs';
import './index.css';
import Govjobs from './Pages/govjobs';
import PrivateIntern from './Pages/privateInternship';
import GovIntern from './Pages/govinternship';
import Overseasjobs from  './Pages/overseasjobs';
import LandingPage from './Pages/LandingPage';
import VideoCallLayout from './Pages/MockInterview';
import Jobfinder from './Pages/jobfinder';
import OverseasIntern from './Pages/overseasinternship';
import CreateRecruiterAccount from './company/recruiterSignUp.jsx';
import RecruiterLogIn from './company/recruiterLogIn.jsx';

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
      <Route path="/Internship/Government" element={<GovIntern />} />
      <Route path="/Internship/Overseas" element={<OverseasIntern />} />
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/mock" element={<VideoCallLayout />} />
      <Route path="/bigcard" element={<Jobfinder />} />
      <Route path="/recruiter" element={<CreateRecruiterAccount />} />
      <Route path="/recruiterlogin" element={<RecruiterLogIn />} />
      <Route path="/jobs/:id" element={<Jobfinder />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  </Router>
  );
};

export default App;
