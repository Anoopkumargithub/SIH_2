import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const BigCard = () => {
  const { id } = useParams(); // Use useParams to get the ID from the URL
  const [jobDetails, setJobDetails] = useState({
      _id: '',
      companyName: ''
  });
  console.log(jobDetails);

  useEffect(() => {
    const fetchJobDetails = async (jobId) => {
      try {
        const token = Cookies.get('accessToken'); // Get the token from cookies
        const response = await axios.get(`http://localhost:8000/api/users/jobs/${jobId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type" : "application/json"
          },
        });
        console.log(response.data);
        setJobDetails(response.data); // Set the state with the fetched job details
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails(id); // Pass the ID from useParams
  }, [id]);

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen text-white font-sans w-screen relative">
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
          {jobDetails.companyName}
        </h1>
        <div className="mb-7 space-y-3">
          <p className="flex items-center text-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#2a52be] mr-3" 
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
            {jobDetails.designation} {/* Use jobDetails data */}
          </p>
          <p className="flex items-center text-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#2a52be] mr-3"
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
            {jobDetails.role}
          </p>
          <p className="flex items-center text-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#2a52be] mr-3"
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
            {jobDetails.salary}
          </p>
          <p className="flex items-center text-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#2a52be] mr-3"
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
            {jobDetails.lastDateToApply}
          </p>
          <p className="flex items-center text-xl italic font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#2a52be] mr-3"
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
            {jobDetails.description}
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

export default BigCard;
