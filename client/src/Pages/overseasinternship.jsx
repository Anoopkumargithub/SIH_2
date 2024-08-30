import Sidebar from '../components/sidebar';
import Dashnavbar from '../components/dashnavbar';
import JobCard from '../components/card';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';
import image from './intern.png';

const OverseasIntern = () => {
  const [jobs, setJobs] = useState([]);
  const fetchMatchedJobs = async ()=>{
    try{
      const response = await axios.post('http://localhost:8000/api/users/jobs/overseas' , {}, {
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
      <Dashnavbar className="sticky top-0 z-10" type="internship"/>
      <div className="flex w-screen h-full">
        <Sidebar className="sticky top-0 h-full" />
        <div className="relative w-full h-full">
          {/* Background image and overlay */}
          <div 
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`, 
              backgroundColor: 'white', 
            //   backgroundBlendMode: 'overlay', 
              brightness:0.5,
              zIndex: 0
            }}
          />
          {/* Content (Job Cards) */}
          <div className="relative z-10 grid grid-cols-3 p-4 gap-6 w-full h-full">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
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

export default OverseasIntern;