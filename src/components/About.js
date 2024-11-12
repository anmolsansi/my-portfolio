import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center max-w-5xl p-4">
        <div className="flex-shrink-0 mb-10 md:mb-0 md:mr-10">
          <img
            src={`${process.env.PUBLIC_URL}/image.jpeg`} // Accessing the image from the public folder
            alt="Profile"
            className="rounded-lg w-100 md:w-96 shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-yellow-500 text-3xl text-lg font-semibold mb-2"> I'M ANMOL SANSI</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Software Engineer</h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            I'm a software engineer passionate about creating innovative solutions that improve user experiences. With a background in both front-end and back-end development, I focus on building scalable and efficient applications that drive positive impact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
