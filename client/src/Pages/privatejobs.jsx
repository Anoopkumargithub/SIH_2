import Sidebar from '../components/sidebar';
import Dashnavbar from '../components/dashnavbar';
import JobCard from '../components/card';
import React from 'react';

const Dashboard = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Dashnavbar className="sticky top-0 z-10" type="job"/>
      <div className="flex w-screen h-full">
        <Sidebar className="sticky top-0 h-full" />
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
