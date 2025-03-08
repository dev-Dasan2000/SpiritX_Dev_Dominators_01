"use client";
import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react'; // Import Lucide icons

// Define the possible icon types
type IconType = 'success' | 'warning' | 'error';

interface SuccessDialogProps {
  iconType: IconType;  // Pass the icon type as a string
  message: string;
  subMessage: string;
  showProgressBar?: boolean; // Whether to show the progress bar
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({
  iconType,
  message,
  subMessage,
  showProgressBar = false,
}) => {
  // State to manage progress bar
  const [currentProgress, setCurrentProgress] = useState(0);

  const interval = setInterval(() => {
    setCurrentProgress((prev) => {
      if (prev < 100) {
        return prev + 1; // Increment progress
      }
      clearInterval(interval); // Stop the interval when progress reaches 100
      return prev;
    });
  }, 20); // Update progress every 50ms (this would take approximately 5 seconds)

  // Define onYes and onNo handlers directly in the component
  const handleYes = () => {
    alert("You clicked Yes");
    // Handle Yes button logic here
  };

  const handleNo = () => {
    alert("You clicked No");
    // Handle No button logic here
  };

  // Function to return the correct icon based on the iconType
  const getIcon = (type: IconType) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-10 h-10 text-green-500" />;  // Success icon
      case 'warning':
        return <AlertTriangle className="w-10 h-10 text-yellow-500" />; // Warning icon
      case 'error':
        return <XCircle className="w-10 h-10 text-red-500" />;    // Error icon
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-3xl w-[400px] p-6 shadow-lg">
        {/* Success Icon with larger size */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          {getIcon(iconType)} {/* Conditionally render the icon based on iconType */}
        </div>

        {/* Main Message */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-white">{message}</h2>
          <p className="mt-2 text-gray-400">{subMessage}</p>
        </div>

        {/* Conditional Rendering of Progress Bar or Yes/No Buttons */}
        {showProgressBar ? (
          <div className="mt-6">
            <div className="h-2 bg-gray-700 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                style={{ width: `${currentProgress}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={handleYes}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Yes
            </button>
            <button
              onClick={handleNo}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuccessDialog;
