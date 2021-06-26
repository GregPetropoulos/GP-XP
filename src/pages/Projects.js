import React from "react";
import ProjectList from "../components/ProjectList";
// import Footer from "../components/Footer";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

// PROJECT IMAGES
import GolfImages from '../images/golf.jpg'
import EmployeeImage from "../images/employee-directory.jpg"
import FitImage from "../images/fit-image.jpg"


function Projects() {
  return (
    <Container>
       <Row>
        <p style={{fontFamily:'monospace',fontSize:'1.6rem'}}>&lt;projects&gt;</p>
      </Row>
      <ProjectList
        img={GolfImages}
        title="Golfers+"
        description="An app designed from front to back for golf quota scoring 
        stats keeping while playing hole by hole"
      >
        {/* <Image src="../../images/golf.jpg" fluid /> */}
        <a href="https://bit.ly/Golfersplus-deployed" target='_blank' rel="noreferrer" className='project-links'>Deployed</a>
        {/* <br></br> */}<Row></Row>
        <a href="https://github.com/GregPetropoulos/Golf-Assistant-App" target='_blank' rel="noreferrer" className='project-links' >
          Github
        </a>
      </ProjectList>

      <ProjectList
        img={EmployeeImage}
        title="Employee Directory"
        description="I created an employee directory with React and as per industry standard, I broke up the application's UI into components, managed component state and props, and respond to user events. 
        Employee data was acquired by the randomuser.me API"
      >
        <a href='https://gregpetropoulos.github.io/Employee-Directory/' target='_blank' rel="noreferrer" className='project-links'>
          Deployed
        </a>
        {/* <br></br> */}<Row></Row>
        <a href="https://github.com/GregPetropoulos/Employee-Directory" target='_blank' rel="noreferrer"className='project-links'>
          Github
        </a>
      </ProjectList>

      <ProjectList
        img={FitImage}
        title="Workout Tracker"
        description="I created a workout tracker and (NoSQL) Mongo database with a Mongoose schema and handle routes with Express.
         Use the MVC paradigm and connect the back end to the front end."
      >
        <a href="https://fittracker210518.herokuapp.com/?id=60a6abb46ed3680015489964" target='_blank' rel="noreferrer" className='project-links'>
          Deployed
        </a>
        {/* <br></br> */}<Row></Row>
        <a href="https://github.com/GregPetropoulos/Workout-Tracker" target='_blank' rel="noreferrer"className='project-links'>
          Github
        </a>
      </ProjectList>
      <Row>
        <p style={{fontFamily:'monospace',fontSize:'1.6rem'}}>&lt;/projects&gt;</p>
      </Row>
      </Container>
  );
}

export default Projects;
