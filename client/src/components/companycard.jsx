import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobCard = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleViewDetails = () => {
    navigate('/jobdetails'); // Navigate to /jobdetails route
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg space-y-2">
      <div>Company Name: Innovative Software Solutions</div>
      <div>Skills Required: Java, Spring, SQL</div>
      <div>Designation: Software Engineer</div>
      <div>Course: B.Tech</div>
      <div className='flex justify-between'>
        <button
          onClick={handleViewDetails}
          className="bg-teal-500 text-white py-2 px-4 rounded"
        >
          View Details
        </button>
        <button className="bg-teal-500 text-white py-2 px-4 rounded">
          Applicants
        </button>
      </div>
    </div>
  );
};

export default JobCard;
