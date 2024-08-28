import Sidebar from '../components/sidebar';
import Dashnavbar from '../components/dashnavbar';
import Companycard from '../components/bigcard';
import React from 'react';

const  Jobfinder = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Dashnavbar className="sticky top-0 z-10" type="internship"/>
      <div className="flex w-screen h-full">
        <Sidebar className="sticky top-0 h-full" />
        <div className="flex-grow flex flex-wrap gap-8 overflow-hidden ">
          <Companycard />
       
          {/* Add more cards or other content here */}
        </div>
      </div>
    </div>
  );
};

export default Jobfinder;
