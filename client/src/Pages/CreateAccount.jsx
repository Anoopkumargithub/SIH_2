import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import signupImage from './signup-image.png'; // Import your image

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await axios.post('http://localhost:8000/api/users/signup', { name, email, password });
      localStorage.setItem('accessToken', result.data.accessToken);
      localStorage.setItem('refreshToken', result.data.refreshToken);
      localStorage.setItem('userId', result.data.userId);
      navigate('/userprofile');
    } catch (err) {
      console.error('Error:', err.response ? err.response.data : err.message);
      alert('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <div className="min-h-screen bg-[#0a0f1f] text-white w-screen flex">
        <div className="relative hidden lg:block w-1/2 h-screen">
          <img 
            src={signupImage} 
            alt="Sign Up Illustration" 
            className="object-cover w-full h-full transform translate-x-10 translate-y-5" // Adjust the values as needed
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-screen px-4">
          <div className="w-full lg:w-[75%] xl:w-[75%]">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-center">Create an account</h2>
              <p className="text-center text-lg mt-2">
                Sign up to access our job and internship opportunities.
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    className="bg-[#0a1a2f] border border-[#1a6ba0] text-white px-4 py-2 rounded-md w-full"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-[#0a1a2f] border border-[#1a6ba0] text-white px-4 py-2 rounded-md w-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter a password"
                  className="bg-[#0a1a2f] border border-[#1a6ba0] text-white px-4 py-2 rounded-md w-full"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#1a6ba0] text-white font-bold py-3 px-4 rounded-md"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>
              </div>
            </form>
            <br />
            <div className='px-20'>
              <Link to="/login" className="text-sm text-white text-2.5xl font-bold">
                Already have an account? Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
