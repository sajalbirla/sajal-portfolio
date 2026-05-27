import React, { useState } from "react";
import BigstepLogo from "../../assets/bigstep_logo.jpeg";
import Ameyatrix from "../../assets/ameyatrix_logo.png";
import AutodeskLogo from "../../assets/autodesk_logo.webp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);
  const experienceData = [
    {
      id: 3,
      company: "Autodesk",
      position: "Software development engineer",
      location: "Bengaluru, Karnataka",
      startDate: "July 2024",
      endDate: "Present",
      logo: AutodeskLogo,
      description: [
        "Engineered an AI-powered Code Reviewer for developers that streamlined the review process, reducing pull request lifecycle time by 50% and increasing weekly deployment velocity by 20%.",
        "Designed and deployed a scalable migration from Adobe Experience Manager (AEM) to Contentful by building a modular tool using TypeScript, Contentful and Azure OpenAI (GPT-4), reducing manual effort while ensuring content integrity, localization support and scalable batch processing.",
        "Led the migration of a legacy monolithic application to a microservices architecture using micro-frontends (React) and serverless services (AWS Lambda), enabling independent deployments, accelerating feature delivery by 30% and reducing infrastructure costs by 35%.",
        "Worked with cross-functional teams to build a role-based access control (RBAC) system and enhancing data accuracy and reducing migration time by 40% while strengthening overall access management.",
        "Leveraged Jenkins to implemented CI/CD pipelines that automate build execution, test runs, and daily generation of test result reports, integrating Slack and PagerDuty alerts for real-time visibility into build status."
      ],
      techStack: ["React", "Node.js", "MongoDB", "AWS", "AI", "RAG"]
    },
    {
      id: 1,
      company: "BigStep Technologies",
      position: "Software Developer",
      location: "Gurugram, Haryana",
      startDate: "Jan 2022",
      endDate: "July 2024",
      logo: BigstepLogo,
      description: [
        "Proficient in utilizing WebRTC to capture and optionally stream audio and video media.",
        "Executed RESTful API's to make HTTP requests for fetching and submitting data to the backend.",
        "Built reusable code for future use and optimized web pages for 5 applications for maximum speed & scalability.",
        "Worked with UI/UX design teams to improve existing applications and increase conversion rates by 20%.",
        "Integrate real-time Google Analytics on the website for live traffic monitoring, user count, average visit duration, and click-through analysis.",
        "Enhanced a login authorization component to provide different login types based on the type of user accessing.",
        "Developed and implemented multiple dynamic and browser-compatible web pages utilizing HTML5, CSS3, JavaScript, and React (Redux), resulting in a 40% increase in page loading speed and a 25% decrease in bounce rate."
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "WebRTC"]
    },
    {
      id: 2,
      company: "Ameyatrix",
      position: "Full Stack Developer",
      location: "Gurugram, Haryana",
      startDate: "JULY 2021",
      endDate: "NOV 2021",
      logo: Ameyatrix,
      description: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ],
      techStack: ["React", "Node.js", "MongoDB", "Express"]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="experience" id="experience">
      <div className="experience-header">Experience</div>
      <div className="experience-list-container">
        {experienceData.map((job) => (
          <div key={job.id} className="experience-item">
            <div className="experience-logo-badge">
              <img src={job.logo} alt={job.company} />
            </div>
            <div className="experience-content">
              <div 
                className={`experience-header-section ${expandedId === job.id ? 'expanded' : ''}`}
                onClick={() => toggleExpand(job.id)}
              >
                <div className="experience-title-section">
                  <h3 className="experience-company">{job.company}</h3>
                  <p className="experience-position">{job.position}</p>
                </div>
                <div className="experience-date-section">
                  {job.startDate} – {job.endDate}
                </div>
                <div className="experience-toggle-icon">
                  <KeyboardArrowDownIcon 
                    style={{
                      transform: expandedId === job.id ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
              </div>
              {expandedId === job.id && (
                <div className="experience-details">
                  <div className="experience-description">
                    <ul>
                      {job.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="experience-tech-stack">
                    {job.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
