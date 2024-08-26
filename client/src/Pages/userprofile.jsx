import React from 'react';
import Navbar from '../components/navbar';
const FormComponent = () => {
  return (
    <div>
<Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1f] w-screen">
      
      <div className="grid grid-cols-2 gap-3 bg-[#013440] p-8 rounded-lg shadow-lg w-9/12 max-w-5xl">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-[#aed9e0] font-semibold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
          />
        </div>

        {/* Last Name */}
        {/* <div>
          <label htmlFor="lastName" className="block text-[#aed9e0] font-semibold mb-2">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
          />
        </div> */}

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-[#aed9e0] font-semibold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
          />
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="gender" className="block text-[#aed9e0] font-semibold mb-2">
            Gender
          </label>
          <select
            id="gender"
            className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
            defaultValue=""
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="number" className="block text-[#aed9e0] font-semibold mb-2">
            Mobile Number
          </label>
          <input
            id="number"
            type="number"
            className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
          />
        </div>

        {/* Current City */}
        <div>
          <label htmlFor="currentCity" className="block text-[#aed9e0] font-semibold mb-2">
            Current City
          </label>
          <input
            id="currentCity"
            type="text"
            className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
          />
        </div>

        {/* Languages You Know */}
        <div>
          <label htmlFor="languages" className="block text-[#aed9e0] font-semibold mb-2">
            Languages You Know
          </label>
          <input
            id="languages"
            type="text"
            className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
          />
        </div>

        <div>
          <label htmlFor="areasOfInterest" className="block text-[#aed9e0] font-semibold mb-2">
            Area(s) of Interest
          </label>
          <input
            id="areasOfInterest"
            type="text"
            className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
          />
        </div>

        
      

   

        {/* Skills */}
        <div>
          <label htmlFor="gender" className="block text-[#aed9e0] font-semibold mb-2">
            Skills
          </label>
          <select
            id="skills"
            className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
            defaultValue=""
          >
            <option value="" disabled>
              Select Skills
            </option>
            <option value="male">HTML</option>
            <option value="female">CSS</option>
            <option value="others">React js</option>
            <option value="others">Python</option>
            <option value="others">Machine Learning</option>
            <option value="others">Cloud</option>
          </select>
        </div>

        {/* Save and Continue Button */}
        <div className="col-span-2 flex justify-end mt-4">
          <button className="bg-[#004080] hover:bg-[#003366] text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-opacity-50">
            Save and Continue
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FormComponent;
