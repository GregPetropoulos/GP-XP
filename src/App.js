import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";

import "bootstrap/dist/css/bootstrap.min.css";

// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";


function App() {
  return (
    <Router>
      <>
      {/* <Wrapper> */}
        <NavBar/>
        {/* <div className="home-link">
          <Link to="/home">Home</Link>
          </div>
          <div className="project-link">
          <Link to="/projects">Projects</Link>
          </div>
          <div className="about-link">
          <Link to="/about">About</Link>
          </div>
          <div className="contact-link">
          <Link to="/contact">Contact</Link>
        </div> */}
          <Switch>
        <Route exact path="/">
                <LandingPage/>
              </Route>
            <Route exact path="/home">
              <Home />
            </Route>
           
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        {/* </Wrapper> */}
      </>
    </Router>
  );
}

export default App;
