import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BigstepLogo from "../../assets/bigstep_logo.jpeg";
import Ameyatrix from "../../assets/ameyatrix_logo.png";

const Experience = () => {
  return (
      <div className="experience" id="experience">
        <div className="experience-header">Experience</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="experience-content-container">
            <div className="experience-content">
              <div className="experience-content-header">
                <FiberManualRecordIcon fontSize="medium" /> &nbsp; BigStep
                Technologies (Software Developer)
              </div>
              <div className="experience-content-location">
                <div className="experience-content-location-heading">
                  <LocationOnIcon /> Gurugram, Haryana &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (Jan, 2022 -
                  Present)
                </div>
              </div>
              <div className="experience-content-description">
                <ul>
                  <li>
                    Proficient in utilizing WebRTC to capture and optionally
                    stream audio and video media.
                  </li>
                  <li>
                    Executed RESTful API’s to make HTTP requests for fetching
                    and submitting data to the backend.
                  </li>
                  <li>
                    Built reusable code for future use and optimized web pages
                    for 5 applications for maximum speed & scalability
                  </li>
                  <li>
                    Worked with UI/UX design teams to improve existing
                    applications and increase conversion rates by 20%.
                  </li>
                  <li>
                    Integrate real-time Google Analytics on the website for live
                    traffic monitoring, user count, average visit duration, and
                    click-through analysis.
                  </li>
                  <li>
                    Enhanced a login authorization component to provide
                    different login types based on the type of user accessing
                  </li>
                  <li>
                    Developed and implemented multiple dynamic and
                    browser-compatible web pages utilizing HTML5, CSS3,
                    JavaScript, and React (Redux), resulting in a 40% increase
                    in page loading speed and a 25% decrease in bounce rate.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-content-image">
              <img src={BigstepLogo} alt="Software Logo" />
            </div>
          </div>
          <div className="experience-content-container">
            <div className="experience-content">
              <div className="experience-content-header">
                <FiberManualRecordIcon fontSize="medium" /> &nbsp; Software
                Developer
              </div>
              <div className="experience-content-location">
                <div className="experience-content-location-heading">
                  <LocationOnIcon /> Gurugram, Haryana &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (Jan, 2022 -
                  Present)
                </div>
              </div>
              <div className="experience-content-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
              </div>
            </div>
            <div className="experience-content-image">
              <img src={Ameyatrix} alt="Software Logo" />
            </div>
          </div>
        </div>
      </div>
  );
};
export default Experience;
