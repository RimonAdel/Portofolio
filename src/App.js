import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>

        {/* <Route path="/Portofolio/:id">
          <CourseCertificateScreen />
        </Route> */}

        <Route path="/Portofolio" exact>
          <Navbar />
          <main>
            <About />
            <Skills />
            <Projects />
            <Courses />
          </main>
          <Footer />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
