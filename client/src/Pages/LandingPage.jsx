import React from 'react';
import Navbar from '../components/navbar';
import pg1 from '../assets/pg1.svg';
import feature1img from '../assets/feature1img.svg'
import feature2img from '../assets/feature2img.svg'
import feature3img from '../assets/feature3img.svg'
import footer1img from '../assets/footer1img.svg';
import footer2img from '../assets/footer2img.svg';
import footer3img from '../assets/footer3img.svg';
import footer4img from '../assets/footer4img.svg';
import footer5img from '../assets/footer5img.svg';
import footer6img from '../assets/footer6img.svg';
import footer7img from '../assets/footer7img.svg';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1f] text-white w-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center text-center mt-20 mx-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:max-w-5xl w-full mx-auto">
          {/* Left Side Content */}
          <div className="text-left lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl sm:text-6xl font-bold mb-6">
              Let’s get started with your career journey
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg text-lg">
                Candidate Sign-up
              </button>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg text-lg">
                Employer Sign-up
              </button>
            </div>
            <p className="text-lg">
              Discover your next opportunity or find the perfect candidate with NexCareer! Whether you’re a job seeker or an employer, our platform connects top talent with leading companies. Start your career journey or streamline your hiring process today with NexCareer!
            </p>
          </div>
          {/* Right Side Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img src={pg1} alt="Career Journey" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </main>


      {/* features */}
      <div className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI Mock Interviews */}
          <div className="text-center">
            <img src={feature1img} alt="Career Journey" className="w-full max-w-md mx-auto" />
            <h3 className="text-2xl font-bold mb-2">AI Mock Interviews</h3>
            <p>Enhance your interview preparation with our AI Mock Interview feature</p>
          </div>

          {/* Smart Feedback Report */}
          <div className="text-center">
            <img src={feature2img} alt="Career Journey" className="w-full max-w-md mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Smart Feedback Report</h3>
            <p>Enhance your skills and upgrade yourself with our Feedback Report Feature from AI Mock Interview.</p>
          </div>

          {/* Smart Chatbot Guide */}
          <div className="text-center">
            <img src={feature3img} alt="Career Journey" className="w-full max-w-md mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Smart Chatbot Guide</h3>
            <p>A chatbot guide to help you with your selection rate in a company plus suggestions to upgrade your skills required by the company.</p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="flex justify-between items-center py-5 px-10">
            <img src={footer1img} alt="Footer Image 1" className="w-44 h-auto mx-1" />
            <img src={footer2img} alt="Footer Image 2" className="w-44 h-auto mx-1" />
            <img src={footer3img} alt="Footer Image 3" className="w-44 h-auto mx-1" />
            <img src={footer4img} alt="Footer Image 4" className="w-44 h-auto mx-1" />
            <img src={footer5img} alt="Footer Image 5" className="w-44 h-auto mx-1" />
            <img src={footer6img} alt="Footer Image 6" className="w-44 h-auto mx-1" />
            <img src={footer7img} alt="Footer Image 7" className="w-44 h-auto mx-1" />
        </div>
    </div>
  );
};

export default LandingPage;