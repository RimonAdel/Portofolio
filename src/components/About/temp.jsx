import React from "react";
import "./about.css";
const About = (props) => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="contacts2">
          <h3>About Me</h3>
          <p>
            My name is Rimon, I'm a computer Enineer. Currently I'm working at
            EJADA Systems Ltd.
          </p>
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
        <span className="interests"> interts</span>
      </div>
    </section>
  );
};

export default About;
