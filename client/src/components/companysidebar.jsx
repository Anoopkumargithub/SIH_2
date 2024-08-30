import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div 
      className="bg-[#112d4e] text-white flex flex-col justify-between items-center"
      style={{ 
        width: "450px",  
        paddingLeft: '2%', 
        paddingTop: '2%',
        paddingRight: '1%', 
        height: '90vh',
        overflow: 'hidden', // Prevents overflow
      }}
    >
      <div className="space-y-8 w-full flex-grow flex flex-col"> {/* Added flex-col */}
        <button 
          className={`bg-white text-[#112d4e] rounded-lg p-4 w-full text-lg font-bold text-center`} 
          onClick={() => handleNavigation('/dashboard')} // Navigate to /dashboard
        >
          Jobs Posted
        </button>
        <button 
          className={`bg-white text-[#112d4e] rounded-lg p-4 w-full text-lg font-bold text-center`} 
          onClick={() => handleNavigation('/recruiterinternship')} // Navigate to /recruiterinternship
        >
          Internships Posted
        </button>
        <button 
          className={`bg-white text-[#112d4e] rounded-lg p-4 w-full text-lg font-bold text-center`}
          onClick={() => handleNavigation('/job-intern-post')} 
        >
          Create Job or Internship
        </button>
      </div>
      <div className="space-y-4 w-full pb-5">
        <button
          className={`bg-[#112d4e] text-white rounded-lg p-4 w-full font-bold text-2xl text-center 
           hover:underline focus:outline-none border-none`}
          onClick={() => handleNavigation('/dashboard')} // Navigate to /dashboard on Home button click
        >
          Home
        </button>
        <button
          className={`bg-[#112d4e] text-white rounded-lg p-4 w-full font-bold text-2xl text-center 
           hover:underline focus:outline-none border-none`}
          onClick={() => handleNavigation('/recruiterLogIn')} // Navigate to /recruiterLogIn on Logout button click
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
