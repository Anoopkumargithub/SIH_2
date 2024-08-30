import React from 'react'; 

const Jd = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Background Image */}
     
      {/* Job Details Card */}
      <div className="relative bg-white rounded-lg shadow-lg p-8 w-11/12 max-w-4xl opacity-90">
        {/* Fields */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="text-lg font-semibold">Designation:</div>
            <div>Software Engineer</div>
          </div>
          <div className="flex justify-between">
            <div className="text-lg font-semibold">Role:</div>
            <div>Full Stack Developer</div>
          </div>
          <div className="flex justify-between">
            <div className="text-lg font-semibold">Course:</div>
            <div>B.Tech</div>
          </div>
          <div className="flex justify-between">
            <div className="text-lg font-semibold">Job Location:</div>
            <div>Bangalore</div>
          </div>
          <div className="flex justify-between">
            <div className="text-lg font-semibold">Salary:</div>
            <div>$70,000</div>
          </div>
          <div className="flex justify-between">
            <div className="text-lg font-semibold">Terms and Conditions:</div>
            <div>Permanent</div>
          </div>
          <div className="flex justify-between">
            <div className="text-lg font-semibold">Skillset:</div>
            <div>React, Node.js, SQL</div>
          </div>
          <div className="flex justify-between">
            <div className="text-lg font-semibold">Job Description:</div>
            <div>Building and maintaining web applications</div>
          </div>
          <div className="flex justify-between">
            <div className="text-lg font-semibold">Last Date to Apply:</div>
            <div>30th September 2024</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Jd;
