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
            I’m a Full Stack Software Engineer with 4+ years of experience building scalable web applications and AI-powered products that solve real-world problems. I specialize in developing modern, high-performance applications using technologies like React.js, Node.js, JavaScript, HTML5, and CSS3, with a strong focus on clean architecture, intuitive user experiences, and maintainable code.Passionate about turning ideas into impactful digital products, I enjoy working across the entire development lifecycle — from crafting responsive frontend interfaces to designing robust backend systems. I’m detail-oriented, collaborative, and continuously exploring new technologies to build smarter, more efficient solutions.
          </div>
        </div>
      </div>
  );
};
export default Details;
