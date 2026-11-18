import { skills } from "../../../data/skills";
import React from "react";

const MySkills = () => {

  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <h2 className="skills-header" id="skills-heading">Technical skills</h2>
      <div className="skills-chips-wrapper">
        {skills.map((skill) => (
          <div className="skill-chip" key={skill.id}>
            <img src={skill.image} width="48" height="48" loading="lazy" decoding="async" alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default MySkills;
