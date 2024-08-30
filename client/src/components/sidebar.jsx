import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('Jobs');
  const navigate = useNavigate();

  useEffect(() => {
    setActiveLink('Jobs'); // Set default active link to 'Jobs'
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const handleButtonClick = (buttonName) => {
    setActiveLink(buttonName);
    if (buttonName === 'Logout') {
      navigate('/login');
    }
  };

  return (
    <div 
      className="bg-[#112d4e] text-white flex flex-col justify-between items-center"
      style={{ 
        width: "450px",  
        paddingLeft: '1%', 
        paddingTop: '2%',
        paddingRight: '1%', 
        height: '90vh',
        overflow: 'hidden', // Prevents overflow
      }}
    >
      <div className="space-y-8 w-full flex-grow flex flex-col"> {/* Added flex-col */}
        <Link 
          className={`bg-white text-[#112d4e] rounded-lg p-4 w-full text-lg font-bold text-center ${
            activeLink === 'Jobs' ? 'underline' : ''
          }`} 
          to={'/Jobs/Private'}
          onClick={() => handleLinkClick('Jobs')}
        >
          Jobs
        </Link>
        <Link 
          className={`bg-white text-[#112d4e] rounded-lg p-4 w-full text-lg font-bold text-center ${
            activeLink === 'Internships' ? 'underline' : ''
          }`} 
          to={'/Internship/Private'}
          onClick={() => handleLinkClick('Internships')}
        >
          Internships
        </Link>
        <Link 
          className={`bg-white text-[#112d4e] rounded-lg p-4 w-full text-lg font-bold text-center ${
            activeLink === 'Mentorship' ? 'underline' : ''
          }`} 
          to={'/mentorship'}
          onClick={() => handleLinkClick('Mentorship')}
        >
          Mentorship
        </Link>
        <Link 
          className={`bg-white text-[#112d4e] rounded-lg p-4 w-full text-lg font-bold text-center ${
            activeLink === 'Result' ? 'underline' : ''
          }`} 
          to={'/report'}
          onClick={() => handleLinkClick('Result')}
        >
          Result
        </Link>
      </div>
      <div className="space-y-4 w-full pb-5">
        {['Profile', 'Logout'].map((buttonName) => (
          <button
            key={buttonName}
            className={`bg-[#112d4e] text-white rounded-lg p-4 w-full font-bold text-2xl text-center ${
              activeLink === buttonName ? 'underline' : ''
            } hover:underline focus:outline-none border-none`}
            onClick={() => handleButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
