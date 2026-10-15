import { experienceData } from "../../../data/experience";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(current => current === id ? null : id);
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
                  <KeyboardArrowDownIcon />
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
