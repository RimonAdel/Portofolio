import React from "react";
import {MenuItems} from "../Navbar/MenuItems";
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__section">
            <h3>Rimon Adel</h3>
            <div className='footer__about__content'>passionate about Data Structure and Problem Solving. always eager to learn some thing new in my free time. love cars and robotics </div>
            <h4>Lives in Alexandria, Egypt</h4>
        </div>
        <div className="footer__section_links">
            <h3>Qucik links</h3>
            {MenuItems.map((item, index) => {
              return (
                  <ul>
                      <li>
                      <a className={item.cName} href={item.URL}>
                  {item.title}
                </a>
                      </li>
                  </ul>

              );
            })}
        </div>
        <div className="footer__section__contacts">
            <h3>Contants</h3>
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
              <li>
                <a
                  href="https://www.hackerrank.com/rimonadel01"
                  class="fab fa-hackerrank"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="link"
                ></a>
              </li>

            </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
