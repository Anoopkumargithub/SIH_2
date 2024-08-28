import React from 'react';

const Companycard = () => {
  return (
    <div 
      className="flex justify-center items-center h-screen text-white font-sans w-screen relative"
    >
      {/* Background Image with Reduced Opacity */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${"https://img.freepik.com/premium-photo/flat-illustration-team-brainstorming-coworking-office-warm-pastel-colors_818261-10581.jpg"})`,
            opacity: 0.5 // Adjust this value as needed
          }}
        />
      </div>
      
      {/* Card */}
      <div className="relative w-4/5 max-w-[800px] bg-white bg-opacity-70 text-black rounded-lg shadow-2xl p-10 z-10">
        <h1 className="text-3xl font-bold mb-5 text-[#1c4b8c] text-center">
          TCS
        </h1>
        <div className="mb-7 space-y-3">
          <p className="flex items-center text-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#2a52be] mr-3" // Adjust size here
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h1m0 0h-1m-4 4v-4h4V9a1 1 0 00-1-1H7m-2 0a1 1 0 00-1 1v6m6-3h4"
              />
            </svg>
            About the company
          </p>
          <p className="flex items-center text-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#2a52be] mr-3" // Adjust size here
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-3.32 0-6 2.688-6 6s2.68 6 6 6c3.313 0 6-2.688 6-6 0-3.313-2.687-6-6-6z"
              />
            </svg>
            For what role
          </p>
          <p className="flex items-center text-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#2a52be] mr-3" // Adjust size here
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-3.32 0-6 2.688-6 6s2.68 6 6 6c3.313 0 6-2.688 6-6 0-3.313-2.687-6-6-6z"
              />
            </svg>
            Package
          </p>
          <p className="flex items-center text-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#2a52be] mr-3" // Adjust size here
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-3.32 0-6 2.688-6 6s2.68 6 6 6c3.313 0 6-2.688 6-6 0-3.313-2.687-6-6-6z"
              />
            </svg>
            Criteria
          </p>
          <p className="flex items-center text-xl italic font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#2a52be] mr-3" // Adjust size here
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-3.32 0-6 2.688-6 6s2.68 6 6 6c3.313 0 6-2.688 6-6 0-3.313-2.687-6-6-6z"
              />
            </svg>
            (Job Description)
          </p>
        </div>
        <div className="flex justify-center mb-5">
          <button className="bg-[#2a52be] text-white rounded-md px-6 py-3 mr-5 transition-transform transform hover:scale-105 duration-300 hover:bg-[#1c4b8c]">
            Practise Mock for TCS
          </button>
          <button className="bg-[#2a52be] text-white rounded-md px-6 py-3 transition-transform transform hover:scale-105 duration-300 hover:bg-[#1c4b8c]">
            Apply Now
          </button>
        </div>
        <p className="text-center text-sm text-gray-600">
          No. of applications: <span className="font-bold text-[#2a52be]">1200</span>
        </p>
      </div>
    </div>
  );
};

export default Companycard;
