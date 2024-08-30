import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/companysidebar';
import bigcardimage from './bigcardimage.svg';
import Jd from '../components/recruiterbigcard';

const JobDetails = () => {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-[#0d0e0f]">
          {/* SVG Background beside the sidebar and below the navbar */}
          <div 
            className="absolute top-[4rem] left-[15rem] right-0 bottom-0 bg-no-repeat opacity-90" 
            style={{
              backgroundImage: `url(${bigcardimage})`,
              backgroundPosition: 'center ',
              backgroundSize: 'contain',
              zIndex: 0,
            }}
          />
          {/* Container for the job cards */}
          <div className=" p-4  pt-16 gap-4 z-10 opacity-80">
            <Jd />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
