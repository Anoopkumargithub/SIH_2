import React from 'react';
import { useNavigate } from 'react-router-dom';

const TableComponent = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle button click
  const handleViewClick = () => {
    navigate('/detailedreport');
  };

  return (
    <div className='h-full w-full p-4 overflow-auto bg-gray-400'>
      <div className="overflow-x-auto h-full ">
        {/* Reduced padding in th and td elements */}
        <table className="min-w-full h-full border border-gray-300 rounded-lg bg-gray-300">
          <thead>
            <tr className="bg-black-100">
              <th className="py-1 px-4 border-b border-gray-300">S.No</th>
              <th className="py-1 px-4 border-b border-gray-300">Company</th>
              <th className="py-1 px-4 border-b border-gray-300">Role</th>
              <th className="py-1 px-4 border-b border-gray-300">Date</th>
              <th className="py-1 px-4 border-b border-gray-300">Rank</th>
              <th className="py-1 px-4 border-b border-gray-300">Detail Report</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="py-1 px-4 border-b border-gray-300">1</td>
              <td className="py-1 px-4 border-b border-gray-300">TCS</td>
              <td className="py-1 px-4 border-b border-gray-300">SDE1</td>
              <td className="py-1 px-4 border-b border-gray-300">17/08</td>
              <td className="py-1 px-4 border-b border-gray-300">80/100</td>
              <td className="py-1 px-4 border-b border-gray-300">
                <button
                  onClick={handleViewClick}
                  className="bg-green-200 text-green-800 py-1 px-3 rounded-md"
                >
                  View
                </button>
              </td>
            </tr>
            {/* Repeat for other rows */}
            <tr className="text-center">
              <td className="py-1 px-4 border-b border-gray-300">2</td>
              <td className="py-1 px-4 border-b border-gray-300">Google</td>
              <td className="py-1 px-4 border-b border-gray-300">SDE1</td>
              <td className="py-1 px-4 border-b border-gray-300">17/08</td>
              <td className="py-1 px-4 border-b border-gray-300">40/100</td>
              <td className="py-1 px-4 border-b border-gray-300">
                <button
                  onClick={handleViewClick}
                  className="bg-green-200 text-green-800 py-1 px-3 rounded-md"
                >
                  View
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="py-1 px-4 border-b border-gray-300">2</td>
              <td className="py-1 px-4 border-b border-gray-300">Google</td>
              <td className="py-1 px-4 border-b border-gray-300">SDE1</td>
              <td className="py-1 px-4 border-b border-gray-300">17/08</td>
              <td className="py-1 px-4 border-b border-gray-300">40/100</td>
              <td className="py-1 px-4 border-b border-gray-300">
                <button
                  onClick={handleViewClick}
                  className="bg-green-200 text-green-800 py-1 px-3 rounded-md"
                >
                  View
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="py-1 px-4 border-b border-gray-300">2</td>
              <td className="py-1 px-4 border-b border-gray-300">Google</td>
              <td className="py-1 px-4 border-b border-gray-300">SDE1</td>
              <td className="py-1 px-4 border-b border-gray-300">17/08</td>
              <td className="py-1 px-4 border-b border-gray-300">40/100</td>
              <td className="py-1 px-4 border-b border-gray-300">
                <button
                  onClick={handleViewClick}
                  className="bg-green-200 text-green-800 py-1 px-3 rounded-md"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <nav>
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
            </li>
            <li>
              <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
            </li>
            <li>
              <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">3</a>
            </li>
            <li>
              <span className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300">...</span>
            </li>
            <li>
              <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">10</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TableComponent;
