import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import AiMentorshipSVG from '../assets/aimentorshipsvg.svg';
import HumanMentorshipSVG from '../assets/humanmentorshipsvg.svg';

const MentorshipPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 grid grid-cols-2 gap-4 p-8 bg-gray-700">
          {/* AI Based Mentorship Card */}
          <div className="bg-gray-300 rounded-lg shadow-lg flex flex-col justify-between items-center p-6 overflow-hidden">
            <img src={AiMentorshipSVG} alt="AI Based Mentorship" className="w-full h-full object-contain mb-4"/>
            <h2 className="text-xl font-semibold mb-4">AI Based Mentorship</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Click Here
            </button>
          </div>

          {/* Human Based Mentorship Card */}
          <div className="bg-gray-300 rounded-lg shadow-lg flex flex-col justify-between items-center p-6 overflow-hidden">
            <img src={HumanMentorshipSVG} alt="Human Based Mentorship" className="w-full h-full object-contain mb-4"/>
            <h2 className="text-xl font-semibold mb-4">Human Based Mentorship</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Click Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipPage;
