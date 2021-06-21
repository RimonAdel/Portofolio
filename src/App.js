import React, {useContext} from 'react'
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WorkExperiance from "./components/WorkExperiance/WorkExperiance";
import DataProvider from "./DataContext";

function App() {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route path="/Portofolio" exact>
            <Navbar />
            <main>
              <About />
              <Skills />
              <Projects />
              <WorkExperiance/>
              <Courses />
            </main>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
