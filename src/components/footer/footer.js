import { trackEvent } from "../../lib/analytics";
import React from "react";
import SocialMedia from "../socials/socials";
import { config } from "../../constant/config";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-intro">
        <div className="footer-intro-section-1">
          <h3 className="footer-intro-section-1-header">Get In Touch</h3>
          <div className="footer-intro-section-1-description">
            Discuss a project or just want to say Hi🖐? My Inbox is open for
            all.
          </div>
          <div className="footer-intro-section-1-contact">
            <div className="footer-intro-section-1-contact-details">
              <div className="socials-icon">
                <LocationOnIcon />
              </div>
              {config.location}
            </div>
            <a
              className="footer-intro-section-1-contact-details"
              href={`mailto:${config.email}`}
              onClick={() => trackEvent("contact_click", { method: "email", source: "footer" })}
            >
              <div className="socials-icon">
                <EmailIcon />
              </div>
              {config.email}
            </a>
            <a
              className="footer-intro-section-1-contact-details"
              href={`tel:${config.phone}`}
              onClick={() => trackEvent("contact_click", { method: "phone", source: "footer" })}
            >
              <div className="socials-icon">
                <CallIcon />
              </div>
              {config.phone}
            </a>
          </div>
        </div>
        <div className="footer-intro-section-2">
          <SocialMedia />
        </div>
      </div>
      <div className="footer-note">"Thanks for Scrolling"</div>
    </footer>
  );
};
export default Footer;
