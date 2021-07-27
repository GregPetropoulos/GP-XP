import React from 'react';
import ProjectList from '../components/projectList/ProjectList';
// import Footer from "../components/Footer";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

// PROJECT IMAGES
import GolfImages from '../images/golf.jpg';
import EmployeeImage from '../images/employee-directory.jpg';
import FitImage from '../images/fit-image.jpg';
import BuildAPageImage from '../images/build-a-page.jpg';
import DevSquadImage from '../images/dev-squad.jpg';


// NEED TO ADD <a> TO IMAGE AND PROJECT TITLE FOR FUNCTIONALITY
function Projects() {
  return (
    <Container>
      <Row>
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: '1.4rem',
            color: '#d6b850'
          }}
        >
          &lt;projects&gt;
        </p>
      </Row>

      <ProjectList
        img={DevSquadImage}
        title='Dev Squad'
        description='Full stack social media MERN app, rich api calls, authentication,
         and validation.Utilized Model View Controllers, Mongoose ORM, JSX, HTML, Bootstrap
        Protected routes and endpoints with JSON Web Tokens, 
        Redux for app state management and testing with Redux Chrome extension, creating actions and reducers for resources, creating a build script, secured keys, and deployed to Heroku with git commands.
        '
      >
        <a
          href='https://bit.ly/Deployed-DS'
          target='_blank'
          rel='noreferrer'
          className='project-links'
        >
          Deployed
        </a>
        {/* <br></br> */}
        <Row></Row>
        <a
          href='https://bit.ly/Greg-DevSquad'
          target='_blank'
          rel='noreferrer'
          className='project-links'
        >
          Github
        </a>
      </ProjectList>

      <ProjectList
        img={BuildAPageImage}
        title='Build-A-Page'
        description='Full stack MERN app that creates a rich mobile responsive NO-CODE HTML Template quickly and
         easily publish them to your website or save it locally.
        Model View Controllers paradigm, state management via 
        Context Provider, JSX, JavaScript,  HTML, Bootstrap, Tailwind, CSS, Node, Express, Gravatar 
        .'
      >
        <a
          href='https://bit.ly/Deployed-BAP'
          target='_blank'
          rel='noreferrer'
          className='project-links'
        >
          Deployed
        </a>
        {/* <br></br> */}
        <Row></Row>
        <a
          href='https://bit.ly/Greg-Build-A-Page'
          target='_blank'
          rel='noreferrer'
          className='project-links'
        >
          Github
        </a>
      </ProjectList>

      <ProjectList
        img={GolfImages}
        title='Golfers+'
        description='An app designed from front to back for golf quota scoring 
        stats keeping while playing hole by hole'
      >
        {/* <Image src="../../images/golf.jpg" fluid /> */}
        <a
          href='https://bit.ly/Golfersplus-deployed'
          target='_blank'
          rel='noreferrer'
          className='project-links'
        >
          Deployed
        </a>
        {/* <br></br> */}
        <Row></Row>
        <a
          href='https://github.com/GregPetropoulos/Golf-Assistant-App'
          target='_blank'
          rel='noreferrer'
          className='project-links'
        >
          Github
        </a>
      </ProjectList>

      <ProjectList
        img={EmployeeImage}
        title='Employee Directory'
        description="I created an employee directory with React and as per industry standard, I broke up the application's UI into components, managed component state and props, and respond to user events. 
        Employee data was acquired by the randomuser.me API"
      >
        <a
          href='https://gregpetropoulos.github.io/Employee-Directory/'
          target='_blank'
          rel='noreferrer'
          className='project-links'
        >
          Deployed
        </a>
        {/* <br></br> */}
        <Row></Row>
        <a
          href='https://github.com/GregPetropoulos/Employee-Directory'
          target='_blank'
          rel='noreferrer'
          className='project-links'
        >
          Github
        </a>
      </ProjectList>

      <ProjectList
        img={FitImage}
        title='Workout Tracker'
        description='I created a workout tracker and (NoSQL) Mongo database with a Mongoose schema and handle routes with Express.
         Use the MVC paradigm and connect the back end to the front end.'
      >
        <a
          href='https://fittracker210518.herokuapp.com/?id=60a6abb46ed3680015489964'
          target='_blank'
          rel='noreferrer'
          className='project-links'
        >
          Deployed
        </a>
        {/* <br></br> */}
        <Row></Row>
        <a
          href='https://github.com/GregPetropoulos/Workout-Tracker'
          target='_blank'
          rel='noreferrer'
          className='project-links'
        >
          Github
        </a>
      </ProjectList>
      <Row>
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: '1.4rem',
            color: '#d6b850',
            margin:'5%'
          }}
        >
          &lt;/projects&gt;
        </p>
      </Row>
    </Container>
  );
}

export default Projects;
