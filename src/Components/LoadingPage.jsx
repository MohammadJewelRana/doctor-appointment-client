import React from 'react';

const LoadingPage = () => {
    return (
        //     <div className="flex justify-center items-center h-screen bg-gray-200">
        //     <div className="flex flex-col items-center">
        //       <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500"></div>
        //       <p className="mt-4 text-purple-500 text-lg">Loading...</p>
        //     </div>
        //   </div>


        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-300 to-red-400">
            <div className="text-white">
                <svg
                    className="animate-spin h-12 w-12 mx-auto mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647z"
                    ></path>
                </svg>
                <p className="text-xl">Loading...</p>
            </div>
        </div>
    );
};

export default LoadingPage;