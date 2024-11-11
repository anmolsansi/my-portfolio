import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white p-8">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 bg-gray-800 rounded-md text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 bg-gray-800 rounded-md text-white"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 bg-gray-800 rounded-md text-white"
        ></textarea>
        <button type="submit" className="bg-yellow-500 text-black p-2 rounded-md">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
