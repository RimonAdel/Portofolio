import React from 'react';
import "./Courses.css"
import Course from "./Course"
import {Courses_list} from "./Courses_list"

const Courses = () => {
  // const 
    return (
      <section id="courses">
        <div className="content-section">
          <h3>Courses</h3>
          <div>
            <div className="courses-holder">
              {Courses_list.map((course) => {
                return <Course key={course.id} {...course} />;
              })}
            </div>
          </div>
        </div>
      </section>
    );
}

export default Courses;
