/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, Fragment } from 'react';
import ProjectItems from '../components/ProjectItems/ProjectItems';
// import Footer from "../components/Footer";
import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
// import Unsplash, { toJson } from "unsplash-js";

// PROJECT IMAGES
import GolfImages from '../images/golf.jpg';
import EmployeeImage from '../images/employee-directory.jpg';
import FitImage from '../images/fit-image.jpg';
import BuildAPageImage from '../images/build-a-page.jpg';
import DevSquadImage from '../images/dev-squad.jpg';
import ExcavationImage from '../images/excavation.jpg';
import axios from 'axios';

const Projects = () => {
  //*CONFIGURATIONS AND KEYS
  let githubClientId;
  let githubClientSecret;
  let unsplashAccess;
  
  if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    unsplashAccess=process.env.REACT_APP_MY_ACCESS;
  } else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
    unsplashAccess=process.env.MY_ACCESS;
    
  }

  //*STATE
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [randomProject, setRandomProject] = useState(3);
  const [images, setImages]=useState([])

  console.log('projects', projects);

  // *VARIABLES FOR THE GITHUB API
  const baseUrl = `https://api.github.com/users/GregPetropoulos`;
  const repoUrl = `/repos?per_page=100&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`;
  const allRepoUrl = `${baseUrl}${repoUrl}`;

  // *VARIABLES FOR THE UNSPLASH API
  const baseUrlUnsplash=`https://api.unsplash.com`
  const getImage =`/photos/?client_id=${unsplashAccess}`
  const allUnsplashImages =`${baseUrlUnsplash}${getImage}`


  //*THE CALL TO GH *GET THE TOP 5
  useEffect(() => {
    console.log('useEffect project axios call here');

    // loader while function gets response
    setLoading(true);
// calling on the github api
    const getAllRepos = async () => {
      const res = await axios.get(allRepoUrl);
      setProjects(res.data);
      console.log('res.data', res.data);
      return res;
    };
    setLoading(false);
    getAllRepos();

    // calling on the unsplash api
    const repoUnsplashImages = async () => {
      const res = await axios.get(allUnsplashImages)
      setImages(res.data);
      console.log('res.data', res.data);
      return res;
    }
    repoUnsplashImages()
  }, [allRepoUrl]);

  // *CHANGE THE ID NUMBERS TO MODIFY THE TOP 5 IN THE FUTURE
  const top5 = [
    { id: 435850053 },
    { id: 391642169 },
    { id: 383392571 },
    { id: 421770170 },
    { id: 426586061 }
  ];
  // *RETURNS TOP 5
  const myTop5 = () => {
    if (projects !== null) {
      const isMatch = () =>
        projects.filter((item) => top5.find((t5) => item.id === t5.id));
      if (isMatch) {
        return isMatch();
      }
    }
  };
  // *RETURNS RANDOM
  const isRandom = () => {
    if (projects !== null) {
      const randMatch = () =>
        projects.filter((item) => !top5.find((t5) => item.id === t5.id));
      if (randMatch) {
        Math.floor(Math.random() * randMatch.length);
        return randMatch();
      }
    }
  };

// * NO TRENDING FUNCTION NEEDED FOR TRENDING CATEGORY SINCE GITHUB API IS RETURNING THE LATEST REPOS
// console.table(projects)
console.log('KEY CHECK HERE',process.env.MY_ACCESS);

  return (
    <Fragment>
      <Row>
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: '1.4rem',
            color: '#d6b850'
          }}>
          &lt;projects&gt;
        </p>
      </Row>

      <Row title='My Top 5 Repos'>
        <h2>My Top 5 Repos</h2>
        <ul className='ul-of-repos'>
          {myTop5().map((repo) => (
            <ProjectItems repo={repo} key={repo.id} loading={loading} />
          ))}
        </ul>
        <h2>Random Repos</h2>
        <ul className='ul-of-repos'>
          {isRandom().map(
            (repo) =>
              repo.homepage && (
                <ProjectItems repo={repo} key={repo.id} loading={loading} />
              )
          )}
        </ul>
        <h2>Trending</h2>
        <ul className='ul-of-repos'>
          {projects.map(
            (repo) =>
              repo.homepage && (
                <ProjectItems repo={repo} key={repo.id} loading={loading} />
              )
          )}
        </ul>
      </Row>

      <Row>
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: '1.4rem',
            color: '#d6b850'
          }}>
          &lt;/projects&gt;
        </p>
      </Row>
    </Fragment>
  );
};

// const userStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(3. 1fr)',
//   gridGap: '1rem'
// };
// -----------------------––––––––––––––––––––––––––––
// <Container>
//   <Row>
//     <p
//       style={{
//         fontFamily: 'monospace',
//         fontSize: '1.4rem',
//         color: '#d6b850'
//       }}
//     >
//       &lt;projects&gt;
//     </p>
//   </Row>

//   <ProjectList
//     img={DevSquadImage}
//     title='Dev Squad'
//     description='Full stack social media MERN app, rich api calls, authentication,
//      and validation.Utilized Model View Controllers, Mongoose ORM, JSX, HTML, Bootstrap
//     Protected routes and endpoints with JSON Web Tokens,
//     Redux for app state management and testing with Redux Chrome extension, creating actions and reducers for resources, creating a build script, secured keys, and deployed to Heroku with git commands.
//     '
//   >
//     <a
//       href='https://bit.ly/DEVSQUAD'
//       target='_blank'
//       rel='noreferrer'
//       className='project-links'
//     >
//       Deployed
//     </a>
//     {/* <br></br> */}
//     <Row></Row>
//     <a
//       href='https://bit.ly/Greg-DevSquad'
//       target='_blank'
//       rel='noreferrer'
//       className='project-links'
//     >
//       Github
//     </a>
//   </ProjectList>

//   <ProjectList
//     img={ExcavationImage}
//     title='GP Excavation'
//     description='I designed and built a full stack MERN Website for a local excavation company to
//     increase web presence.The back end is built for the deployment to Heroku and 3rd party dependency
//     EmailJS was utilized for the form API for free quotes and newsletters.
//     The front end is rich in plain css, animation and mobile responsive.
//     Future goals include MongoDB set up for customer reviews and lead capture.'
//   >
//     <a
//       href='https://bit.ly/GP-Excavation'
//       target='_blank'
//       rel='noreferrer'
//       className='project-links'
//     >
//       Deployed
//     </a>
//     {/* <br></br> */}
//     <Row></Row>
//     <a
//       href='https://github.com/GregPetropoulos/GP-Excavation'
//       target='_blank'
//       rel='noreferrer'
//       className='project-links'
//     >
//       Github
//     </a>
//   </ProjectList>

//   <ProjectList
//     img={BuildAPageImage}
//     title='Build-A-Page'
//     description='Full stack MERN app that creates a rich mobile responsive NO-CODE HTML Template quickly and
//      easily publish them to your website or save it locally.
//     Model View Controllers paradigm, state management via
//     Context Provider, JSX, JavaScript,  HTML, Bootstrap, Tailwind, CSS, Node, Express, Gravatar
//     .'
//   >
//     <a
//       href='https://bit.ly/Deployed-BAP'
//       target='_blank'
//       rel='noreferrer'
//       className='project-links'
//     >
//       Deployed
//     </a>
//     {/* <br></br> */}
//     <Row></Row>
//     <a
//       href='https://bit.ly/Greg-Build-A-Page'
//       target='_blank'
//       rel='noreferrer'
//       className='project-links'
//     >
//       Github
//     </a>
//   </ProjectList>

//   <ProjectList
//     img={GolfImages}
//     title='Golfers+'
//     description='An app designed from front to back for golf quota scoring
//     stats keeping while playing hole by hole'
//   >
//     {/* <Image src="../../images/golf.jpg" fluid /> */}
//     <a
//       href='https://bit.ly/Golfersplus-deployed'
//       target='_blank'
//       rel='noreferrer'
//       className='project-links'
//     >
//       Deployed
//     </a>
//     {/* <br></br> */}
//     <Row></Row>
//     <a
//       href='https://github.com/GregPetropoulos/Golf-Assistant-App'
//       target='_blank'
//       rel='noreferrer'
//       className='project-links'
//     >
//       Github
//     </a>
//   </ProjectList>

//   <ProjectList
//     img={EmployeeImage}
//     title='Employee Directory'
//     description="I created an employee directory with React and as per industry standard, I broke up the application's UI into components, managed component state and props, and respond to user events.
//     Employee data was acquired by the randomuser.me API"
//   >
//     <a
//       href='https://gregpetropoulos.github.io/Employee-Directory/'
//       target='_blank'
//       rel='noreferrer'
//       className='project-links'
//     >
//       Deployed
//     </a>
//     {/* <br></br> */}
//     <Row></Row>
//     <a
//       href='https://github.com/GregPetropoulos/Employee-Directory'
//       target='_blank'
//       rel='noreferrer'
//       className='project-links'
//     >
//       Github
//     </a>
//   </ProjectList>

//   <ProjectList
//     img={FitImage}
//     title='Workout Tracker'
//     description='I created a workout tracker and (NoSQL) Mongo database with a Mongoose schema and handle routes with Express.
//      Use the MVC paradigm and connect the back end to the front end.'
//   >
//     <a
//       href='https://fittracker210518.herokuapp.com/?id=60a6abb46ed3680015489964'
//       target='_blank'
//       rel='noreferrer'
//       className='project-links'
//     >
//       Deployed
//     </a>
//     {/* <br></br> */}
//     <Row></Row>
//     <a
//       href='https://github.com/GregPetropoulos/Workout-Tracker'
//       target='_blank'
//       rel='noreferrer'
//       className='project-links'
//     >
//       Github
//     </a>
//   </ProjectList>
//   <Row>
//     <p
//       style={{
//         fontFamily: 'monospace',
//         fontSize: '1.4rem',
//         color: '#d6b850',
//       }}
//     >
//       &lt;/projects&gt;
//     </p>
//   </Row>
// </Container>
//   );
// }

export default Projects;
