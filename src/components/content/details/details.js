import React from "react";
import portrait320 from "../../assets/optimized/portrait-320.webp";
import portrait640 from "../../assets/optimized/portrait-640.webp";

const Details = () => {
  return (
      <div className="details">
        <div className="details-image">
          <div className="image-container">
            <img
              src={portrait320}
              srcSet={`${portrait320} 320w, ${portrait640} 640w`}
              sizes="(max-width: 1300px) 25vw, 315px"
              width="1562"
              height="2132"
              loading="lazy"
              decoding="async"
              alt="Sajal Birla"
            />
          </div>
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
