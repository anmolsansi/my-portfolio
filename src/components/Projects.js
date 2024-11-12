import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website to showcase my projects and skills.",
      technologies: ["React", "Tailwind CSS", "GitHub Pages"],
      achievements: [
        "Designed and deployed a responsive website on GitHub Pages.",
        "Utilized React and Tailwind CSS to create a visually appealing and user-friendly interface.",
        "Showcased projects, skills, and contact information, resulting in a professional online presence."
      ],
    },
    {
      title: "AI-Driven Quiz System",
      description: "A web application for generating AI-based quizzes with dynamic question generation.",
      technologies: ["Python", "Google Gemini", "Streamlit", "NLP", "SQLAlchemy", "Google Vertex AI"],
      achievements: [
        "Built an AI-powered quiz generator, increasing user engagement by 30%.",
        "Leveraged NLP and machine learning for unique question validation and real-time feedback.",
        "Integrated Google Cloud AI services for scalable and efficient data processing."
      ],
    },
    {
      title: "The Movie Review – Android Application",
      description: "An Android app that lets users explore and review movies from a vast database.",
      technologies: ["Java", "Firebase", "XML", "Android Studio"],
      achievements: [
        "Managed a database of over 10,000 movies, boosting user retention by 25%.",
        "Implemented a user-friendly interface with real-time updates using Firebase.",
        "Enabled seamless user reviews and ratings, enhancing engagement and app stickiness."
      ],
    },
    {
      title: "Pharmacy Management System – Desktop and Web Application",
      description: "A comprehensive management system for pharmacies, available as both a desktop and web application.",
      technologies: ["Java", "JavaFX", "SQL", "JSP", "Maven", "JavaScript", "React"],
      achievements: [
        "Designed and implemented RESTful APIs to handle authentication, role-based access, and interactive JSP/JavaScript pages.",
        "Improved performance by 40% with a Java/SQL backend, reducing downtime by 20% and cutting build time by 25% using Maven."
      ],
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 text-gray-800 p-10 flex items-center justify-center">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        
        {projects.map((project, index) => (
          <div key={index} className="mb-10 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-gray-500 mb-2"><strong>Technologies Used:</strong> {project.technologies.join(", ")}</p>
            <ul className="list-disc list-inside space-y-2">
              {project.achievements.map((achievement, idx) => (
                <li key={idx} className="text-gray-700">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;