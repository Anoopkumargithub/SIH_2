import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === 'Logout') {
      navigate('/login');
    }
  };

  return (
    <div className='w-screen overflow-hidden'>
      <div 
        className="bg-[#112d4e] text-white flex flex-col justify-between items-center"
        style={{ 
          width: '22%', 
          paddingLeft: '2%', 
          paddingTop: '2%',
          paddingRight: '2%', 
          height: '88vh',
        }}
      >
        <div className="space-y-8 w-full flex-grow">
          <button className="bg-white text-[#112d4e] rounded-lg p-4 w-full text-lg font-bold">
            Jobs
          </button>
          <button className="bg-white text-[#112d4e] rounded-lg p-4 w-full text-lg font-bold">
            Internships
          </button>
          <button className="bg-white text-[#112d4e] rounded-lg p-4 w-full text-lg font-bold">
            Mentorship
          </button>
          <button className="bg-white text-[#112d4e] rounded-lg p-4 w-full text-lg font-bold">
            Result
          </button>
        </div>
        <div className="space-y-4 w-full pb-5">
          {['Profile', 'Logout'].map((buttonName) => (
            <button
              key={buttonName}
              className={`bg-[#112d4e] text-white rounded-lg p-4 w-full font-bold text-2xl ${
                activeButton === buttonName ? 'underline' : ''
              } hover:underline focus:outline-none border-none`}
              onClick={() => handleButtonClick(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;