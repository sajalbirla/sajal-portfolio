import { skills } from "../../../data/skills";
import React from "react";

const MySkills = () => {

  return (
    <div className="skills">
      <div className="skills-header">My Skills</div>
      <div className="skills-chips-wrapper">
        {skills.map((skill) => (
          <div className="skill-chip" key={skill.id}>
            <img src={skill.image} width="48" height="48" loading="lazy" decoding="async" alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MySkills;
