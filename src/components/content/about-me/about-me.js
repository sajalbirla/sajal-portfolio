import React from "react";
import SelfMemoji from "../../assets/memoji_self.jpeg";
import { Urlconfig } from "../../../constant/config";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const AboutMe = () => {
  const DownloadResume = () => {
    window.location.href = Urlconfig.ResumeUrl;
  };

  return (
    <div className="about" id="about">
      <div className="about-details">
        <span className="about-details-name">Sajal Birla</span>
        <div className="about-details-role">Software Development Engineer</div>
        <div className="about-details-buttons">
          <button className="about-details-resume-button" onClick={DownloadResume}>
            <FileDownloadIcon />
            Resume
          </button>
          <button className="about-details-contact-button">Contact Me</button>
        </div>
      </div>
      <div className="about-details-image">
        <img src={SelfMemoji} />
      </div>
    </div>
  );
};
export default AboutMe;
