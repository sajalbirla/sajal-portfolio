import { trackEvent } from "../../../lib/analytics";
import React from "react";
import SelfMemoji from "../../assets/memoji_self.png";
import { config } from "../../../constant/config";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const AboutMe = () => {

  return (
    <div className="about" id="about">
      <div className="about-details">
        <span className="about-details-name">Sajal Birla</span>
        <div className="about-details-role">Software Development Engineer</div>
        <div className="about-details-buttons">
          <a
            className="about-details-resume-button"
            href={config.resumeUrl}
            download="Sajal_Birla_Resume.pdf"
            onClick={() => trackEvent("resume_click", { source: "hero" })}
          >
            <FileDownloadIcon />
            Resume
          </a>
          <a className="about-details-contact-button" href="#contact" onClick={() => trackEvent("contact_click", { method: "section", source: "hero" })}>Contact Me</a>
        </div>
      </div>
      <div className="about-details-image">
        <div className="image-container">
          <img src={SelfMemoji} alt="Sajal Birla" />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
