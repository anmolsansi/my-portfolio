import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center max-w-5xl p-4">
        <div className="flex-shrink-0 mb-10 md:mb-0 md:mr-10">
          <img
            src="https://github.com/anmolsansi/my-portfolio/blob/main/src/components/image.jpeg" // Replace with the actual image URL
            alt="Profile"
            className="rounded-lg w-72 md:w-96 shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-yellow-500 text-lg font-semibold mb-2">— I'M ANMOL SANSI</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Software Engineer</h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            I'm a software engineer passionate about creating innovative solutions that improve user experiences. With a background in both front-end and back-end development, I focus on building scalable and efficient applications that drive positive impact.
          </p>
          <button className="bg-transparent border border-yellow-500 text-yellow-500 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition duration-300">
            More About Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
