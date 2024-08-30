import Sidebar from '../components/sidebar';
import Dashnavbar from '../components/dashnavbar';
import JobCard from '../components/card';
import React, { useEffect, useState } from 'react';
import bimage from './Job.png';
// import axis from 'axios';
import {axios} from '../services/helpers';
import Cookie from 'js-cookie';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  const fetchMatchedJobs = async () => {
    try {
      const response = await axios.post('/api/users/jobs/private', {}, {
        headers: {
          'authorization': `Bearer ${Cookie.get("accessToken")}`,
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      setJobs(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchMatchedJobs();
  }, []);

  return (
    <div className="h-screen overflow-hidden w-screen">
      <Dashnavbar className="sticky top-0 z-10" type="job" />
      <div className="flex h-full w-full">
        <Sidebar className="sticky top-0 h-full" />
        <div className="relative w-full h-full">
          {/* Background image and overlay */}
          <div 
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${bimage})`, 
              backgroundColor: 'rgba(0, 0, 0, 0.7)', 
              // backgroundBlendMode: 'overlay', 
              zIndex: 0
            }}
          />
          {/* Content (Job Cards) */}
          <div className="relative z-10 grid grid-cols-3 p-4 gap-6 w-full h-full">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
