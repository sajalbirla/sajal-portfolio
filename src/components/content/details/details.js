import React from "react";
import SajalImage from "../../assets/Self.png";

const Details = () => {
  return (
      <div className="details">
        <div className="details-image">
          <img src={SajalImage} alt="Sajal Birla" />
        </div>
        <div className="details-description">
          <div className="details-description-header">About Me </div>
          <div className="details-description-content">
            A passionate Full Stack Software Developer 🚀 with experience in designing and building web applications. Proficient in HTML5, CSS3, JavaScript, NodeJs, ReactJs, and various other libraries and frameworks, adept at transforming designs into fully functional UI components. Collaborative and solution-driven, with a keen eye for detail and a commitment to continuous learning
          </div>
        </div>
      </div>
  );
};
export default Details;
