import React from "react";
import JavaScript from "../../assets/javascript-1.png";
import ReactJs from "../../assets/react.png";
import NodeJs from "../../assets/node.png";
import GitControl from "../../assets/git.png";
import CPP from "../../assets/Cpp.png";
import TypeScipt from "../../assets/typescript.png";
import Sass from "../../assets/sass.png";

const MySkills = () => {
  const Skills = [
    {
      id: 1,
      SkillName: "JavaScript",
      SkillImage: JavaScript,
    },
    {
      id: 2,
      SkillName: "React",
      SkillImage: ReactJs,
    },
    {
      id: 3,
      SkillName: "Node Js",
      SkillImage: NodeJs,
    },
    {
      id: 4,
      SkillName: "Git",
      SkillImage: GitControl,
    },
    {
      id: 5,
      SkillName: "C++",
      SkillImage: CPP,
    },
    {
      id: 6,
      SkillName: "TypeScript",
      SkillImage: TypeScipt,
    },
    {
      id: 7,
      SkillName: "Sass",
      SkillImage: Sass,
    },
  ];
  return (
    <div className="skills">
      <div className="skills-header">My Skills</div>
      <div className="skills-chips-wrapper">
        {Skills.map((data) => (
          <div className="skill-chip" key={data.id}>
            <img src={data.SkillImage} alt={data.SkillName} />
            <span>{data.SkillName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MySkills;
