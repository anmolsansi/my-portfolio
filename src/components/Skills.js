import React from 'react';

function Skills() {
  return (
    <section id="skills" className="bg-gray-100 text-gray-800 p-10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl font-bold mb-8 text-center">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column (25% Width): Programming */}
          <div className="md:col-span-3 pr-8 py-10">
            <h3 className="text-4xl font-semibold mb-6">Programming</h3>
            <ul className="mt-4 space-y-6 text-2xl text-gray-700">  {/* Increased spacing */}
              <li>Python</li>
              <li>Java</li>
              <li>TypeScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>C++</li>
              <li>XML</li>
              <li>React / React.JS</li>
              <li>Node.js</li>
              <li>JavaScript</li>
            </ul>
          </div>

          {/* Right Column (75% Width): Other Skills with Divider Line */}
          <div className="md:col-span-9 pl-8 border-l-2 border-gray-300">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semibold">Tools</h3>
                <p className="mt-2 text-xl text-gray-700">
                  GitLab / Git, Jira, IntelliJ IDEA, PyCharm, Postman, Eclipse, Version Control
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">Cloud</h3>
                <p className="mt-2 text-xl text-gray-700">
                  Azure, Google Cloud Platform (GCP), Amazon Web Services (AWS), EC2, Lambda, ECS, SQS, Kinesis, API Gateway, Cloudwatch, Cloudformation
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">Databases</h3>
                <p className="mt-2 text-xl text-gray-700">
                  MySQL, SQL, DynamoDB, MongoDB, NoSQL, PostgreSQL, Firebase, PL/SQL
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">Frameworks</h3>
                <p className="mt-2 text-xl text-gray-700">
                  Spring Boot / Spring, Pandas, Tkinter, Flask, Jenkins, Django, NumPy, JUnit, Mockito, PySpark, Express
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">Others</h3>
                <p className="mt-2 text-xl text-gray-700">
                  Windows, MacOS, Unix / Linux, REST API, JSON, Swagger, Microservices, Maven, JVM, Microsoft Office, CI/CD Pipeline, Docker, Kubernetes, Terraform, OAuth2, APIs, Data Analytics, IoT Development, SOAP, Excel, Data Visualization, JSP
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">Coursework</h3>
                <p className="mt-2 text-xl text-gray-700">
                  Project Management, Object-oriented Algorithms and Data Structures, Deep Learning, Machine Learning, AI, Android Development, Full-Stack Development, Service Oriented Architecture, Cloud Computing, Information Systems, IoT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

