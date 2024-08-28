import Sidebar from '../components/sidebar';
import Dashnavbar from '../components/dashnavbar';
import JobCard from '../components/card';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const fetchMatchedJobs = async ()=>{
    try{
      const response = await axios.post('http://localhost:8000/api/users/jobs/private' , {}, {
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
      <Dashnavbar className="sticky top-0 z-10" type="job"/>
      <div className="flex w-screen h-full">
        <Sidebar className="sticky top-0 h-full" />
        <div className="flex-grow p-4 flex flex-wrap gap-8 overflow-hidden pb-20 pl-20">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        <div className="p-4 grid grid-cols-1 lg:grid-cols-3  gap-8 overflow-hidden ">
          <JobCard />
          <JobCard />
          <JobCard />
          {/* <JobCard />
          <JobCard />
          <JobCard /> */}
          {/* Add more cards or other content here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
