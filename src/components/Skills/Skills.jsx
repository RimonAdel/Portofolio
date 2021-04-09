import React from "react";
import "./Skills.css";
import Skill from "./Skill"
import { skills } from "./myskills";

const Skills = (props) => {
  return (
    <section className="skills" id="skills">
      <div className="content-section ">
        <h2>Skills</h2>
        <div className="section-container">
          {skills.map((skill) => {
            return <Skill key={skill.id} {...skill}></Skill>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;;