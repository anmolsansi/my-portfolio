import React from 'react';

function EducationContactFooter() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-800 flex flex-col">
      
      {/* Education Section */}
      <div className="flex-grow w-full py-10 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
        <p className="text-lg text-center">Illinois Institute of Technology, Chicago</p>
        <p className="text-sm text-gray-600 text-center">Masters in Information Technology and Management</p>
        <br/>
        <br/>
        <p className="text-lg text-center">Delhi Technological University, India</p>
        <p className="text-sm text-gray-600 text-center">Bachelors of Technology in Electronics and Communication Engineering</p>
      </div>

      {/* Footer Section */}
      <div className="w-full py-6 bg-gray-900 text-white text-center">
        <p className="text-lg">&copy; 2024 Anmol Sansi. Made using React & Tailwind CSS</p>
      </div>
    </div>
  );
}

export default EducationContactFooter;
