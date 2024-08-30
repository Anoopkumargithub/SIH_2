import React from 'react';


const Form = () => {
  return (
    <div>
        <div className="p-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
                <input type="text" id="branch" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
                <input type="text" id="designation" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
              </div>
              <div className="col-span-2">
                <label htmlFor="job-description" className="block text-sm font-medium text-gray-700">Job Description</label>
                <textarea id="job-description" className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
              </div>
              <div>
                <label htmlFor="job-location" className="block text-sm font-medium text-gray-700">Job Location</label>
                <input type="text" id="job-location" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
                <input type="text" id="salary" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
                <select id="skills" className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                  <option value="">Select Skills</option>
                  <option value="java">Java</option>
                  <option value="spring">Spring</option>
                  <option value="sql">SQL</option>
                </select>
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                <input type="text" id="role" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="recruitment-procedure" className="block text-sm font-medium text-gray-700">Recruitment Procedure</label>
                <select id="recruitment-procedure" className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                  <option value="resume">Resume</option>
                  <option value="interview">Interview</option>
                </select>
              </div>
              <div className="col-span-2">
                <label htmlFor="company-description" className="block text-sm font-medium text-gray-700">Company Description</label>
                <textarea id="company-description" className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
              </div>
              <div>
                <label htmlFor="last-date" className="block text-sm font-medium text-gray-700">Last Date to Apply</label>
                <input type="date" id="last-date" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="terms" className="block text-sm font-medium text-gray-700">Terms & Conditions</label>
                <textarea id="terms" className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save Profile</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Form;