import Sidebar from '../components/sidebar';
import Dashnavbar from '../components/dashnavbar';
import JobCard from '../components/card';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';
import bimage from './Job.png';

const Govjobs = () => {
  const [jobs, setJobs] = useState([]);
  const fetchMatchedJobs = async ()=>{
    try{
      const response = await axios.post('http://localhost:8000/api/users/jobs/government' , {}, {
        headers: {
          'authorization': `Bearer ${Cookie.get("accessToken")}`,
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      setJobs(response.data);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    fetchMatchedJobs();
  }, []);
  return (
    <div className="h-screen overflow-hidden">
      <Dashnavbar className="sticky top-0 z-10" type="job" />
      <div className="flex w-screen h-full">
        <Sidebar className="sticky top-0 h-full" />
        <div className="relative grid grid-cols-3 p-2 gap-10 overflow-hidden w-full">
          {/* Background image and overlay */}
          <div 
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${bimage})`, backgroundColor: 'rgba(0, 0, 0, 0.7)', backgroundBlendMode: 'overlay'// Darken the background image
            }}
          />
        <div className="grid grid-cols-3 p-2 gap-10 overflow-hidden ">
        {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
          {/* <JobCard />
          <JobCard /> */}
        
          {/* <JobCard />
          <JobCard />
          <JobCard /> */}
          {/* Add more cards or other content here */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Govjobs;
