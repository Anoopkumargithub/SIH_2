import React, { useState } from 'react';
import axios from 'axios';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/create-account', formData); // Update the URL
      console.log(response.data);
    } catch (error) {
      console.error('There was an error creating the account!', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1f] text-white w-screen">
      <header className="flex items-center justify-between p-4 bg-[#1a6ba0]">
        <h1 className="text-2xl font-bold">NexCareer</h1>
        <a href="#" className="text-sm text-white">
          Already have an account? Log in
        </a>
      </header>
      <main className="flex flex-col items-center justify-center min-h-[calc(60vh_-_65px)] px-4">
        <div className="w-full lg:w-[30%] xl:w-[30%]">
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
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 bg-white text-black rounded-md"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 bg-white text-black rounded-md"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 bg-white text-black rounded-md"
                  required
                />
              </div>
            </div>
            <button type="submit" className="w-full py-2 bg-[#1a6ba0] text-white rounded-md">
              Create Account
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateAccount;