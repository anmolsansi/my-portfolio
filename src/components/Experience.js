import React from 'react';

function Experience() {
  const experiences = [
    {
      position: "Artificial Intelligence Engineer",
      company: "Radical AI",
      location: "Chicago, USA",
      duration: "Aug 2024 – Present",
      responsibilities: [
        "Built AI-driven tools for quiz and flight management systems, enhancing user engagement using Google Gemini, LLMs, and NLP for dynamic interactions.",
        "Designed optimized database models, improving search performance with SQLAlchemy.",
        "Utilized NLP and machine learning in Google Gemini for unique quiz question generation.",
        "Developed an interactive quiz platform and flight management chatbot, leveraging Google Vertex API and Google Cloud AI tools."
      ],
    },
    {
      position: "Teaching Assistant",
      company: "Illinois Institute of Technology",
      location: "Chicago, USA",
      duration: "Sept 2023 – May 2024",
      responsibilities: [
        "Guided over 100 computer science students in Java programming.",
        "Managed classroom logistics and provided tailored support to enhance student engagement."
      ],
    },
    {
      position: "Associate Software Engineer",
      company: "S&P Global",
      location: "India",
      duration: "Jul 2019 – Dec 2022",
      responsibilities: [
        "Developed a scalable New Pricing Platform and Reference Data.",
        "Accelerated development and debugging using Java and TDD, boosting performance by 50%.",
        "Managed databases of over 1 million records, reducing maintenance expenses by 40%.",
        "Engineered over 100 RESTful APIs using Python.",
        "Optimized large-scale distributed systems with AWS services, improving data processing efficiency by 40% and reducing operational costs by 15%."
      ],
    },
    {
      position: "Software Engineer Intern",
      company: "Intellect Design Arena",
      location: "India",
      duration: "Jun 2018 – Jul 2018",
      responsibilities: [
        "Revamped the user interface of the Government E-Marketplace (GeM) portal.",
        "Collaborated with QA engineers to integrate Selenium and Java automation, reducing APIs and regression testing time by over 70%."
      ],
    },
  ];

  return (
    <section id="experience" className="bg-white text-gray-800 p-10 flex items-center justify-center">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-xl font-semibold">{exp.position} at {exp.company}</h3>
            <p className="text-sm text-gray-600">{exp.location} | {exp.duration}</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
