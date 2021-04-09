import React from 'react'
import Card from '../Card/Card';
import { ProjectsData } from "./projectsData";
import "./ProjectsListStyle.css";

export default function Projects() {
    return (
      <section className="content-section" id="projects">
        <h2>Projects</h2>
        <div>
          <div className="project-holder">
            {ProjectsData.map((product) => {
              return <Card key={product.id} {...product} />;
            })}
          </div>
        </div>
      </section>
    );
}
