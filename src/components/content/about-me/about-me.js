import { trackEvent } from "../../../lib/analytics";
import React from "react";
import hero320 from "../../assets/optimized/hero-320.webp";
import hero480 from "../../assets/optimized/hero-480.webp";
import hero640 from "../../assets/optimized/hero-640.webp";
import hero960 from "../../assets/optimized/hero-960.webp";
import hero1200 from "../../assets/optimized/hero-1200.webp";
import imageLayout from "../../../data/image-layout.json";
import { config } from "../../../constant/config";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const AboutMe = () => {

  return (
    <div className="about" id="about">
      <div className="about-details">
        <h1 className="about-details-name">Sajal Birla</h1>
        <p className="about-details-role">Full-stack software engineer building AI-powered tools and scalable web applications.</p>
        <p className="about-details-summary">Currently at Autodesk, working across frontend engineering, backend services, and cloud platforms.</p>
        <div className="about-details-buttons">
          <a
            className="about-details-resume-button"
            href={config.resumeUrl}
            download="Sajal_Birla_Resume.pdf"
            onClick={() => trackEvent("resume_click", {
              source: "hero",
              file_name: "Resume_Sajal_Birla_Developer.pdf",
              file_extension: "pdf",
            })}
          >
            <FileDownloadIcon />
            Download Resume
          </a>
          <a className="about-details-contact-button" href="#contact" onClick={() => trackEvent("contact_click", { method: "section", source: "hero" })}>Contact Me</a>
        </div>
        <nav className="about-details-links" aria-label="Connect with Sajal">
          <a href={config.linkedinUrl} onClick={() => trackEvent("social_click", { platform: "LinkedIn", source: "hero" })}><LinkedInIcon />LinkedIn</a>
          <a href={config.githubUrl} onClick={() => trackEvent("social_click", { platform: "GitHub", source: "hero" })}><GitHubIcon />GitHub</a>
          <a href={`mailto:${config.email}`} onClick={() => trackEvent("contact_click", { method: "email", source: "hero" })}><EmailIcon />Email</a>
        </nav>
      </div>
      <div className="about-details-image">
        <div className="image-container">
          <img
            src={hero640}
            srcSet={`${hero320} 320w, ${hero480} 480w, ${hero640} 640w, ${hero960} 960w, ${hero1200} 1200w`}
            sizes={imageLayout.heroSizes}
            width="2048"
            height="2048"
            fetchpriority="high"
            decoding="async"
            alt="Sajal Birla"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
