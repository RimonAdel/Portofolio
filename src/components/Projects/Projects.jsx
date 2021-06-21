import React from 'react'
import Card from '../Card/Card';
import { ProjectsData } from "./projectsData";
import "./ProjectsListStyle.css";

export default function Projects() {
    return (
      <section id="projects">
        <div className="content-section">
        <h2>Projects</h2>
          <div className=" section-container project-holder">
            {ProjectsData.map((product) => {
              return <Card key={product.id} {...product} />;
            })}
          </div>
        </div>
      
      </section>
    );
}
