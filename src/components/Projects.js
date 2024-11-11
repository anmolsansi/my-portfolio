import React from 'react';

function Projects() {
  const projects = [
    {
      title: "The Movie Review – Android Application",
      date: "May 2024",
      technologies: ["Java", "Kotlin", "TMDB API", "OMDB API", "Firebase", "YouTube Web API", "SQLite"],
      description: "Implemented TMDB and OMDB APIs to manage over 10,000 movie entries and integrated YouTube trailers. Added a favorites feature, boosting user retention by 25%. Managed user authentication with Firebase for 500+ users and enabled offline data access with SQLite."
    },
    {
      title: "Task Management Application – Desktop Application",
      date: "Aug 2023",
      technologies: ["Python", "Tkinter", "SQLite"],
      description: "Designed and implemented a Tkinter-based task management interface with features for task creation, editing, and deletion. Improved task management efficiency by 50% and user productivity by 35% through enhanced search, filter, and organization capabilities."
    },
    {
      title: "Pharmacy Management System – Desktop and Web Application",
      date: "May 2023",
      technologies: ["Java", "JavaFX", "SQL", "JSP", "Maven", "JavaScript", "React"],
      description: "Developed RESTful APIs for authentication and role-based access. Improved performance by 40% with a Java/SQL backend, reduced downtime by 20%, and cut build time by 25% using Maven."
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 text-gray-800 p-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.date}</p>
            <p className="mt-2"><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
