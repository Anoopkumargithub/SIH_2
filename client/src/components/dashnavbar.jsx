import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashnavbar = ({type}) => {
  const [activeButton, setActiveButton] = useState('Private');

  useEffect(() => {
    setActiveButton('Private'); // Set default active link to 'Private'
  }, []);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <header className="pl-20 flex items-center justify-between p-4 bg-[#214f84]">
      <h1 className="text-4xl font-bold text-white">NexCareer</h1>
      <div className="flex-grow flex justify-start ml-40">
        {type === 'job' ? <div className="flex space-x-20">
          {['Private', 'Government', 'Overseas'].map((buttonName) => (
            <Link
              key={buttonName}
              className={`bg-[#214f84] text-white text-xl font-bold px-4 py-2 ${
                activeButton === buttonName ? 'text-gray-400 underline' : ''
              } hover:text-gray-400 focus:outline-none border-none`}
              to={`/Jobs/${buttonName}`}
              onClick={() => handleButtonClick(buttonName)}
            >
              {buttonName}
            </Link>
          ))}
        </div>:type=="internship"?<div className="flex space-x-20">
          {['Private', 'Government', 'Overseas'].map((buttonName) => (
            <Link
              key={buttonName}
              className={`bg-[#214f84] text-white text-xl font-bold px-4 py-2 ${
                activeButton === buttonName ? 'text-gray-400 underline' : ''
              } hover:text-gray-400 focus:outline-none border-none`}
              to={`/Internship/${buttonName}`}
              onClick={() => handleButtonClick(buttonName)}
            >
              {buttonName}
            </Link>
          ))}
        </div>:null}
        
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-white text-xl pr-10 hover:underline">Hey username!!</span>
      </div>
    </header>
  );
};

export default Dashnavbar;
