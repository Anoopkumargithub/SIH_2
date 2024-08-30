import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const DetailedReport = () => {
  // Sample data for the pie chart
  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: 'Marks Distribution',
        data: [80, 40], // Example: 60% correct, 40% incorrect
        backgroundColor: ['#4CAF50', '#F44336'],
        borderWidth: 1,
      },
    ],
  };

  // Chart options to customize the legend
  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white', // Change legend text color to white
        },
      },
    },
  };

  return (
    
    <div className="flex flex-col md:flex-row bg-gray-900 p-6 rounded-lg shadow-lg mx-auto mt-10 w-screen h-screen">
        
      {/* Left Section */}
      <div className="flex-1 md:w-3/4 p-4 bg-gray-800 rounded-lg border border-gray-700 overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      <h1 className='text-center text-gray-300'>Detailed Report</h1>
      <br />
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-white">Question 1.</h2>
          <p className="text-md text-gray-400">Question Description</p>
          <p className="text-md mt-2 text-gray-300"><strong>Your Answer:</strong> Answer text here...</p>
          <p className="text-md mt-2 text-gray-300"><strong>Things that matched:</strong> Matching items here...</p>
          <p className="text-md mt-2 text-gray-300"><strong>Things missing in the answer:</strong> Missing items here...</p>
          <p className="text-md mt-2 text-gray-300"><strong>Expected Answer:</strong> Expected answer text here...</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-white">Question 2.</h2>
          <p className="text-md text-gray-400">Question Description</p>
          <p className="text-md mt-2 text-gray-300"><strong>Your Answer:</strong> Answer text here...</p>
          <p className="text-md mt-2 text-gray-300"><strong>Things that matched:</strong> Matching items here...</p>
          <p className="text-md mt-2 text-gray-300"><strong>Things missing in the answer:</strong> Missing items here...</p>
          <p className="text-md mt-2 text-gray-300"><strong>Expected Answer:</strong> Expected answer text here...</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-white">Question 3.</h2>
          <p className="text-md text-gray-400">Question Description</p>
          <p className="text-md mt-2 text-gray-300"><strong>Your Answer:</strong> Answer text here...
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit alias, ducimus necessitatibus qui obcaecati itaque quia sed atque cumque? Id vero delectus assumenda temporibus in ab repudiandae sed ea.</p>
          <p className="text-md mt-2 text-gray-300"><strong>Things that matched:</strong> Matching items here...</p>
          <p className="text-md mt-2 text-gray-300"><strong>Things missing in the answer:</strong> Missing items here...</p>
          <p className="text-md mt-2 text-gray-300"><strong>Expected Answer:</strong> Expected answer text here...</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/4 p-4 mt-6 md:mt-0 md:ml-6 bg-gray-800 rounded-lg border border-gray-700">
        <div className="mb-6">
          <p className="text-md text-gray-300"><strong>Name:</strong> John Doe</p><br/>
          <p className="text-md text-gray-300"><strong>Company Name:</strong> ABC Corp</p><br/>
          <p className="text-md text-gray-300"><strong>Role:</strong> Developer</p><br/>
          <p className="text-md text-gray-300"><strong>Designation:</strong> Software Engineer</p><br/>
          <p className="text-md text-gray-300"><strong>Total Marks:</strong> 60</p>
        </div>
        <div className="mt-30"> {/* Add margin-top to shift down */}
          <h2 className="text-xl font-semibold mb-4 text-white">Progress Graph:</h2>
          <div className="w-3/4 mx-auto text-white">
            <Pie data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedReport;
