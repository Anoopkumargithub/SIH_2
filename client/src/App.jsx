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
import MockInterview  from './Pages/MockInterview';
import Jobfinder from './Pages/jobfinder';
import OverseasIntern from './Pages/overseasinternship';
import CreateRecruiterAccount from './company/recruiterSignUp.jsx';
import RecruiterLogIn from './company/recruiterLogIn';
import Report from './Pages/report';
import  DetailedReport  from './Pages/detailedreport';
import RecruiterDashboard from './company/recruiterdashboard';
import JobDetails from './company/jobdetails';
import RecruiterInternship from './company/recruiterinternship.jsx';
import JobInternPost from './company/jobinternpost.jsx';
import MentorshipPage from './Pages/mentorship.jsx';

const App = () => {
  return (
    <Router>
       
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userprofile" element={<FormComponent />} />
      <Route path="/Jobs/Private" element={<DashBoard />} />
      <Route path="/Jobs/Government" element={<Govjobs />} />
      <Route path="/Jobs/Overseas" element={<Overseasjobs />} />
      <Route path="/Internship/Private" element={<PrivateIntern />} />
      <Route path="/Internship/Government" element={<GovIntern />} />
      <Route path="/Internship/Overseas" element={<OverseasIntern />} />
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/mock" element={<MockInterview />} />
      <Route path="/bigcard" element={<Jobfinder />} />
      <Route path="/recruitersignup" element={<CreateRecruiterAccount />} />
      <Route path="/recruiterlogin" element={<RecruiterLogIn />} />
      <Route path="/jobs/:id" element={<Jobfinder />} />
      <Route path="/report" element={<Report />} />
      <Route path="/detailedreport" element={<DetailedReport  />} />
      <Route path="*" element={<div>Page Not Found</div>} />
      <Route path="/dashboard" element= {< RecruiterDashboard/>}/>
      <Route path="/jobdetails" element= {<JobDetails/>}/>
      <Route path="/recruiterinternship" element= {<RecruiterInternship/>}/>
      <Route path="/job-intern-post" element= {<JobInternPost/>}/>
      <Route path="/mentorship" element= {<MentorshipPage/>}/>
    </Routes>
  </Router>
  );
};

export default App;
