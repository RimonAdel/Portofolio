import React, {Component} from "react";

import {MenuItems} from "./MenuItems"
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false, occupation: "Software Developer", scrolled:false };

  componentDidMount() {

    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100){
      this.setState({scrolled: true});
      
    }else{
      this.setState({scrolled: false});
    }

  };

  handleClick = () => {
    this.setState({clicked: !this.state.clicked });
  };

  
  render() {
    return (
      <div className="navbar-holder">
        <nav class="navbar" id="home">
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={
                this.state.clicked
                  ? this.state.scrolled
                    ? "fas fa-times dim"
                    : "fas fa-times"
                  : this.state.scrolled
                  ? "fas fa-bars dim"
                  : "fas fa-bars"
              }
            ></i>
          </div>
          <div className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <a className={item.cName} href={item.URL}>
                  {item.title}
                </a>
              );
            })}
          </div>
        </nav>

        <div className="banner">
          <h1>
            <span class="wave">🙋‍♂️ </span>
            I'm Rimon Adel.
          </h1>
          <h3>
            I'm an Alexandria based <span>Software Developer</span>.
          </h3>
          {/* <hr /> */}
          {/* <ul className="social">{networks}</ul> */}
        </div>
      </div>
    );
  }
}

export default Navbar;