import React from 'react';

const JobCard = (props) => {
  console.log(props);
  return (
    <div className="bg-[#022b3a] text-white shadow-md rounded-lg p-10  px-20 w-full " style={{ height: '38vh' }}>
      <div className="mb-2 ">
        <h2 className="text-lg font-bold">{props.job.companyName}</h2>
        {/* { <img src={`company logo`} alt="Company Logo" className="h-12 w-auto" /> } */}
      </div>
      <p className="text-gray-300 mb-2">{props.job.designation}</p>
      <div className="flex items-center mb-2">
        <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12a5 5 0 100-10 5 5 0 000 10z" />
        </svg>
        <span className="text-gray-300">{props.job.role}</span>
      </div>
      <div className="flex items-center mb-2">
        <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        <span className="text-gray-300">{props.job.skills}</span>
      </div>
      <div className="flex items-center mb-2">
        <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12a5 5 0 100-10 5 5 0 000 10z" />
        </svg>
        <span className="text-gray-300">{props.job.salary}</span>
      </div>
      <div className="flex items-center mb-2">
        <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.5 2.5a1 1 0 101.414-1.414l-2.207-2.207V6z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-300">{props.job.lastDateToApply}</span>
      </div>
      <button className="bg-[#027c7e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
        {`More Details`}
      </button>
    </div>
  );
};

export default JobCard;
