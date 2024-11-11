import React from 'react';

function Skills() {
  const programmingLanguages = ["Python", "Java", "TypeScript", "JavaScript", "C++", "CSS", "HTML", "XML"];
  const frameworksLibraries = ["React", "Node.js", "Spring Boot", "Pandas", "Tkinter", "Flask", "Jenkins", "Django", "NumPy", "JUnit", "Mockito", "PySpark", "Express"];
  const tools = ["Git", "GitLab", "Jira", "IntelliJ IDEA", "PyCharm", "Postman", "Eclipse", "Version Control"];
  const cloudTechnologies = ["AWS ", "EC2", " Lambda", " ECS", " SQS", " Kinesis", " API Gateway", " CloudWatch", " CloudFormation", "Azure", "Google Cloud Platform"];
  const databases = ["MySQL", "SQL", "DynamoDB", "MongoDB", "NoSQL", "PostgreSQL", "Firebase", "PL/SQL"];
  const others = ["Windows", "MacOS", "Unix/Linux", "REST API", "JSON", "Swagger", "Microservices", "Maven", "JVM", "Microsoft Office", "CI/CD Pipeline", "Docker", "Kubernetes", "Terraform", "OAuth2", "APIs", "Data Analytics", "IoT Development", "SOAP", "Excel", "Data Visualization", "JSP"];

  return (
    <section id="skills" className="bg-gray-100 text-gray-800 p-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        
        {/* Programming Languages */}
        <h3 className="text-2xl font-semibold mb-2 mt-6">Programming Languages</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {programmingLanguages.map((skill) => (
            <div key={skill} className="text-center">
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>

        {/* Frameworks and Libraries */}
        <h3 className="text-2xl font-semibold mb-2 mt-6">Frameworks & Libraries</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {frameworksLibraries.map((skill) => (
            <div key={skill} className="text-center">
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>

        {/* Tools */}
        <h3 className="text-2xl font-semibold mb-2 mt-6">Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tools.map((skill) => (
            <div key={skill} className="text-center">
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>

        {/* Cloud Technologies */}
        <h3 className="text-2xl font-semibold mb-2 mt-6">Cloud Technologies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {cloudTechnologies.map((skill) => (
            <div key={skill} className="text-center">
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>

        {/* Databases */}
        <h3 className="text-2xl font-semibold mb-2 mt-6">Databases</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {databases.map((skill) => (
            <div key={skill} className="text-center">
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>

        {/* Others */}
        <h3 className="text-2xl font-semibold mb-2 mt-6">Others</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {others.map((skill) => (
            <div key={skill} className="text-center">
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
