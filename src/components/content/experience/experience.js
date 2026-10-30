import { experienceData } from "../../../data/experience";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Experience = () => {
  const [expandedId, setExpandedId] = useState(experienceData[0]?.id ?? null);

  const toggleExpand = (id) => {
    setExpandedId(current => current === id ? null : id);
  };

  return (
    <div className="experience" id="experience">
      <h2 className="experience-header">Experience</h2>
      <div className="experience-list-container">
        {experienceData.map((job) => (
          <div key={job.id} className="experience-item">
            <div className="experience-logo-badge">
              <img src={job.logo} width="160" height="160" loading="lazy" decoding="async" alt={job.company} />
            </div>
            <div className="experience-content">
              <button
                type="button"
                aria-expanded={expandedId === job.id}
                aria-controls={`experience-details-${job.id}`}
                className={`experience-header-section ${expandedId === job.id ? 'expanded' : ''}`}
                onClick={() => toggleExpand(job.id)}
              >
                <span className="experience-title-section">
                  <span className="experience-company">{job.company}</span>
                  <span className="experience-position">{job.position}</span>
                </span>
                <span className="experience-date-section">
                  {job.startDate} – {job.endDate}
                </span>
                <span className="experience-toggle-icon" aria-hidden="true">
                  <KeyboardArrowDownIcon />
                </span>
              </button>
              <div id={`experience-details-${job.id}`} className="experience-details" hidden={expandedId !== job.id}>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
