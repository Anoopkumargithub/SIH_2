import React from 'react';
import Navbar  from '../components/Navbar';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
const Login = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1f] text-white w-screen">

      <Navbar/>
      <main className="flex flex-col items-center justify-center min-h-[calc(60vh_-_65px)] px-4">
        <div className="w-full lg:w-[30%] xl:w-[30%]"> {/* This line ensures the main div is 50% of the width on large screens */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-center">Continue Your Career Journey!!</h2>
           
          </div>
          <form className="space-y-6">
            
           
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
              id="email"
               placeholder="Enter your email"
                  type="email"
                 className="bg-[#0a1a2f] border border-[#1a6ba0] text-white px-4 py-2 rounded-md w-full"
/>


              </div>
           
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                placeholder="Enter a password"
                type="password"
                className="bg-[#0a1a2f] border border-[#1a6ba0] text-white px-4 py-2 rounded-md w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="otp" className="block text-sm font-medium">
                OTP
              </label>
              <div className="flex space-x-2">
                <input id="otp1" className="w-full bg-[#0a1a2f] border border-[#1a6ba0] text-white px-4 py-2 rounded-md" />
                <input id="otp2" className="w-full bg-[#0a1a2f] border border-[#1a6ba0] text-white px-4 py-2 rounded-md" />
                <input id="otp3" className="w-full bg-[#0a1a2f] border border-[#1a6ba0] text-white px-4 py-2 rounded-md" />
                <input id="otp4" className="w-full bg-[#0a1a2f] border border-[#1a6ba0] text-white px-4 py-2 rounded-md" />
                <input id="otp5" className="w-full bg-[#0a1a2f] border border-[#1a6ba0] text-white px-4 py-2 rounded-md" />
                <input id="otp6" className="w-full bg-[#0a1a2f] border border-[#1a6ba0] text-white px-4 py-2 rounded-md" />
              </div>
            </div>
            <div>
              <button type="submit" className="w-full bg-[#1a6ba0] text-white font-bold py-3 px-4 rounded-md">
            Login 
              </button>
            </div>
            <br />
            <div className='px-20'>
            <Link to="/" className="text-sm text-white text-2.5xl font-bold">
                   Don't have an account? Signin
        </Link>
        </div>
          </form>
        </div>
      </main>
    </div>
  );
};



export default Login;
