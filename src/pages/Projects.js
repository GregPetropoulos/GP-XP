import React from "react";
import ProjectList from "../components/ProjectList";
// import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// import Image from "react-bootstrap/Image";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import GolfImages from '../images/golf.jpg'



function Projects() {
  return (
    <Container>
       <Row>
        <p>&lt;projects&gt;</p>
      </Row>
      <ProjectList
        img={GolfImages}
        title="Golfers+"
        description="An app designed from front to back for golf quota scoring 
        stats keeping while playing hole by hole"
      >
        {/* <Image src="../../images/golf.jpg" fluid /> */}
        <a href="https://bit.ly/Golfersplus-deployed" target='_blank' rel="noreferrer" >Deployed</a>
        {/* <br></br> */}<Row></Row>
        <a href="https://github.com/GregPetropoulos/Golf-Assistant-App" target='_blank' rel="noreferrer" >
          Github
        </a>
      </ProjectList>

      <ProjectList
        img=""
        title="Employee Directory"
        description="I created an employee directory with React and as per industry standard, I broke up the application's UI into components, managed component state and props, and respond to user events. 
        Employee data was acquired by the randomuser.me API"
      >
        <Link to="deployed=https://gregpetropoulos.github.io/Employee-Directory/">
          Deployed
        </Link>
        {/* <br></br> */}<Row></Row>
        <Link to="https://github.com/GregPetropoulos/Employee-Directory">
          Github
        </Link>
      </ProjectList>

      <ProjectList
        img=""
        title="Workout Tracker"
        description="I created a workout tracker and (NoSQL) Mongo database with a Mongoose schema and handle routes with Express.
         Use the MVC paradigm and connect the back end to the front end."
      >
        <Link to="https://fittracker210518.herokuapp.com/?id=60a6abb46ed3680015489964">
          Deployed
        </Link>
        {/* <br></br> */}<Row></Row>
        <Link to="https://github.com/GregPetropoulos/Workout-Tracker">
          Github
        </Link>
      </ProjectList>
      </Container>
  );
}

export default Projects;
