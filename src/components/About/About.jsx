import React from "react";
import "./about.css";
const About = (props) => {
  return (
    <section className="about" id="about">
      <div className="about-interests">
        <div>
          <h3>About Me</h3>
          <p>
            My name is Rimon, I'm a computer Engineer. Currently I'm working at
            EJADA Systems Ltd.
          </p>
          <p>live in Alexandria, Egypt</p>
          <span className="contacts">
            <h3 className="view-cv">Contact Details</h3>
            <p>+201064957782</p>
            <p>+201115481309</p>
            <p>Rimon.adel.01@gmail.com</p>
            <ul className="contact-links">
              <li>
                <a
                  href="https://www.linkedin.com/in/rimon-adel-782aa8156/"
                  title="linked inlink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="fa fa-linkedin"
                ></a>
              </li>
              <li>
                <a
                  href="https://github.com/RimonAdel"
                  class="fab fa-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="link"
                ></a>
              </li>
            </ul>
          </span>
          <a
            href="https://drive.google.com/file/d/1rA9uII1dffOiMG-ElQqXFR9hNJZHmAjA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button"
          >
            View CV
          </a>
        </div>
        <div className="interests">
          <h3>Interests</h3>
          <ul>
            <li>
              <p>Algorithms & Data Structures</p>
            </li>
            <li>
              <p> Full Stack Web Development</p>
            </li>
            <li>
              <p>Robotics and Self Driving Dars</p>
            </li>
          </ul>
          <h3>languages</h3>
          <p>Arabic: Mother Tongue</p>
          <p>English: IELTS (6.5)</p>
        </div>
      </div>
    </section>
  );
};

export default About;
