import React, { useState } from 'react';

const Dashnavbar = () => {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <header className="pl-20 flex items-center justify-between p-4 bg-[#214f84]">
      <h1 className="text-4xl font-bold text-white">NexCareer</h1>
      <div className="flex-grow flex justify-start ml-40">
        <div className="flex space-x-20 ">
          {['Private', 'Government', 'Overseas'].map((buttonName) => (
            <button
              key={buttonName}
              className={`bg-[#214f84] text-white text-xl font-bold px-4 py-2 ${
                activeButton === buttonName ? 'text-gray-400 underline' : ''
              } hover:text-gray-400 focus:outline-none border-none `}
              onClick={() => handleButtonClick(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-white text-xl pr-10 hover:underline">Hey username!!</span>
      </div>
    </header>
  );
};

export default Dashnavbar;