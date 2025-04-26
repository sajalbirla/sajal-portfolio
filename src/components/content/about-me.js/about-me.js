import React from "react";
import SelfMemoji from '../../assets/memoji_self.jpeg';
import {Urlconfig} from '../../../constant/config';

const AboutMe = () => {
  const DownloadResume = () => {
    window.location.href = Urlconfig.ResumeUrl;
  };
  
  return (
    <div className="about">
      <div className="about-details">
        <span className="about-details-name">Sajal Birla</span>
        <div className="about-details-role">Software Development Engineer</div>
        <div>
          <button className="about-details-contact">Contact Me</button>
          <button className="about-details-resume" onClick={DownloadResume}>
            Resume
          </button>
        </div>
      </div>
      <div className="about-details-image">
        <img src={SelfMemoji} />
      </div>
    </div>
  );
};
export default AboutMe;
