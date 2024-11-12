import React from 'react';

function Experience() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center">
      <div className="container mx-auto max-w-5xl p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
        {/* List your experiences here */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Artificial Intelligence Engineer at Radical AI</h3>
          <p className="text-sm text-gray-600">Aug 2024 – Present</p>
          <p className="mt-2">Developed AI-driven tools for quiz and flight management systems, enhancing user engagement.</p>
        </div>
        {/* Add more experience items as needed */}
      </div>
    </div>
  );
}

export default Experience;
