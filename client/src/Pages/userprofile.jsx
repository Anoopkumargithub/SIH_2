import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';

const UserProfile = () => {
  const [profileData, setProfileData] = useState({
    id: '',
    name: '',
    email: '',
    gender: '',
    phone_no: '',
    current_city: '',
    role: '',
    area_of_interest: '',
    currently_looking: '',
    skills: []
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.data) {

          if (!localStorage.getItem('userId')) {
            localStorage.setItem('userId', response.data._id);
          }
          // Ensure that no field in profileData is undefined
          const data = {
            _id: response.data._id || '',
          name: response.data.name || '',
          email: response.data.email || '',
          phone_no: response.data.phone_no || '',
          current_city: response.data.current_city || '',
          gender: response.data.gender || '',
          role: response.data.role || '',
          area_of_interest: response.data.area_of_interest || '',
          currently_looking: response.data.currently_looking || '',
          skills: response.data.skills || []
        };
          setProfileData(data);
        } else {
          setError('Failed to fetch profile. Please log in again.');
          navigate('/login');
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error.message);
        setError('Failed to fetch profile. Please check your connection or try again later.');
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfileData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleMultiSelectChange = (e) => {
    const { id, options } = e.target;
    const values = Array.from(options).filter(option => option.selected).map(option => option.value);
    setProfileData(prevState => ({
      ...prevState,
      [id]: values
    }));
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const userId = profileData._id || localStorage.getItem('userId');  // Retrieve userId from localStorage
      console.log('userId:', userId);
      
      if (!userId) {
        alert('User ID not found. Please log in again.');
        navigate('/login');
        return;
      }
      
      const response = await axios.put(
        `http://localhost:8000/api/users/profile/${profileData._id}`,
        profileData,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      console.error('Error saving profile data:', error.response?.data || error.message);

  
      console.log('Profile saved successfully:', response.data);
      alert('Profile saved successfully');
      navigate('/login');
    } catch (error) {
      console.error('Error saving profile data:', error);
      alert('Failed to save profile data');
    }
  };

  return (
    <div>
      <Navbar />
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
              value={profileData.name || ''}
              readOnly
              className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-[#aed9e0] font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={profileData.email || ''}
              readOnly
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
              value={profileData.gender || ''}
              onChange={handleChange}
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone_no" className="block text-[#aed9e0] font-semibold mb-2">
              Phone Number
            </label>
            <input
              id="phone_no"
              type="number"
              value={profileData.phone_no || ''}
              onChange={handleChange}
              className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
            />
          </div>

          {/* Current City */}
          <div>
            <label htmlFor="current_city" className="block text-[#aed9e0] font-semibold mb-2">
              Current City
            </label>
            <input
              id="current_city"
              type="text"
              value={profileData.current_city || ''}
              onChange={handleChange}
              className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
            />
          </div>

          {/* Area(s) of Interest */}
          <div>
            <label htmlFor="area_of_interest" className="block text-[#aed9e0] font-semibold mb-2">
              Area(s) of Interest
            </label>
            <select
              id="area_of_interest"
              value={profileData.area_of_interest || ''}
              onChange={handleChange}
              className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
            >
              <option value="" disabled>Select Area of Interest</option>
              <option value="AI">AI</option>
              <option value="Cloud">Cloud</option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
            </select>
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-[#aed9e0] font-semibold mb-2">
              Role
            </label>
            <select
              id="role"
              value={profileData.role || ''}
              onChange={handleChange}
              className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
            >
              <option value="" disabled>Select Role</option>
              <option value="Frontend Engineer">Frontend Engineer</option>
              <option value="Backend Engineer">Backend Engineer</option>
              <option value="Full Stack Engineer">Full Stack Engineer</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="DevOps Engineer">DevOps Engineer</option>
              <option value="AI Engineer">AI Engineer</option>
            </select>
          </div>

          {/* Currently Looking For */}
          <div>
            <label htmlFor="currently_looking" className="block text-[#aed9e0] font-semibold mb-2">
              Currently Looking For
            </label>
            <select
              id="currently_looking"
              value={profileData.currently_looking || ''}
              onChange={handleChange}
              className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
            >
              <option value="" disabled>Select an Option</option>
              <option value="Internship">Internship</option>
              <option value="Job">Job</option>
              {/* <option value="Freelance Projects">Freelance Projects</option>
              <option value="Open Source Contributions">Open Source Contributions</option>
              <option value="Mentorship">Mentorship</option>
              <option value="Not Looking">Not Looking</option> */}
            </select>
          </div>

          {/* Skills */}
          <div>
            <label htmlFor="skills" className="block text-[#aed9e0] font-semibold mb-2">
              Skills
            </label>
            <select
              id="skills"
              multiple
              value={profileData.skills || []}
              onChange={handleMultiSelectChange}
              className="bg-[#022b3a] border-[#027c7e] border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#02a9a3] text-[#e0f4f1]"
            >
              {/* 'React.js', 'Node.js', 'MongoDB', 'HTML', 'CSS', 'Python', 'Machine Learning', 'Cloud', 'JavaScript', 'TypeScript' */}
                    <option value="React.js">React.js</option>
                    <option value="Node.js">Node.js</option>
                    <option value="MongoDB">MongoDB</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="Python">Python</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Cloud">Cloud</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="TypeScript">TypeScript</option>


            </select>
          </div>

          <div className="col-span-2 mt-4">
            <button
              onClick={handleSave}
              className="bg-[#02a9a3] hover:bg-[#02a9a3] text-white font-semibold py-2 px-4 rounded w-full"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
