import React from 'react';

function Skills() {

  const skillsCategories = [
    { title: "Programming Languages", skills: ["Python", "Java", "TypeScript", "JavaScript", "C++", "CSS", "HTML", "XML"] },
    { title: "Frameworks & Libraries", skills: ["React", "Node.js", "Spring Boot", "Pandas", "Tkinter", "Flask", "Jenkins", "Django", "NumPy", "JUnit", "Mockito", "PySpark", "Express"] },
    { title: "Tools", skills: ["Git", "GitLab", "Jira", "IntelliJ IDEA", "PyCharm", "Postman", "Eclipse", "Version Control"] },
    { title: "Cloud Technologies", skills: ["AWS", "Azure", "Google Cloud Platform"] },
    { title: "Databases", skills: ["MySQL", "SQL", "DynamoDB", "MongoDB", "NoSQL", "PostgreSQL", "Firebase", "PL/SQL"] },
    { title: "Others", skills: ["Windows", "MacOS", "Unix/Linux", "REST API", "JSON", "Swagger", "Microservices", "Maven", "JVM", "Microsoft Office", "CI/CD Pipeline", "Docker", "Kubernetes", "Terraform", "OAuth2", "APIs", "Data Analytics", "IoT Development", "SOAP", "Excel", "Data Visualization", "JSP"] },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center">
      <div className="container mx-auto max-w-5xl p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      {skillsCategories.map((category, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            {category.skills.map((skill) => (
              <div key={skill} className="font-semibold">{skill}</div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Skills;
