import React from "react";
import "./Skills.css";

const Skill = (props) => {
  const { name, level} = props;

  const fillerStyles = {
    width: `${level}%`,
  };


  return (
    <div className="skill-1">
      <h3 className="skill-name">{name}</h3>
      <div className="skill">
        <div style={fillerStyles} className="skill-level"></div>
      </div>
    </div>
  );
};

export default Skill;
