import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users/login', {
        email,
        password,
      });
      console.log(response.data);
      navigate('/dashboard'); // Replace with your intended route
    } catch (error) {
      console.error('Login Error:', error); // Log any error
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'An error occurred');
      } else {
        setError('An error occurred');
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1f] text-white w-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[calc(60vh_-_65px)] px-4">
        <div className="w-full lg:w-[30%] xl:w-[30%]">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-center">Login</h2>
            <p className="text-center text-lg mt-2">
              Log in to access your account.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-[#0a1a2f] border border-[#1a6ba0] text-white px-4 py-2 rounded-md w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="bg-[#0a1a2f] border border-[#1a6ba0] text-white px-4 py-2 rounded-md w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full bg-[#1a6ba0] text-white font-bold py-3 px-4 rounded-md"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
