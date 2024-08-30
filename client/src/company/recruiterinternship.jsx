import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/companysidebar';
import JobCard from '../components/companycard';
import Recruiterdashboardsvg from './recruiterdashboardsvg.svg';

const RecruiterInternship = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="relative w-full bg-black">
          {/* SVG Background behind the job cards and below the navbar */}
          <div 
            className="absolute inset-0 top-[4rem] bg-no-repeat opacity-75" 
            style={{
              backgroundImage: `url(${Recruiterdashboardsvg})`,
              backgroundPosition: 'center',
              backgroundSize: '50%',  // Adjust this value to make the SVG smaller
              zIndex: 0,
            }}
          />
          {/* Container for the job cards */}
          <div className="relative p-4 grid grid-cols-3 gap-4 z-10 opacity-80">
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterInternship;
