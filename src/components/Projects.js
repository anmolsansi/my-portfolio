import React from 'react';

function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center">
      <div className="container mx-auto max-w-5xl p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
        {/* List your projects here */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold">The Movie Review – Android Application</h3>
          <p className="mt-2">Managed 10,000+ movie entries, boosting user retention by 25%.</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </div>
  );
}

export default Projects;
