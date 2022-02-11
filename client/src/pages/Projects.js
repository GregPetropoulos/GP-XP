/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, Fragment } from 'react';
import ProjectItems from '../components/ProjectItems/ProjectItems';
// import Footer from "../components/Footer";
import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
// import Unsplash, { toJson } from "unsplash-js";

// PROJECT IMAGES
// import GolfImages from '../images/golf.jpg';
// import EmployeeImage from '../images/employee-directory.jpg';
// import FitImage from '../images/fit-image.jpg';
// import BuildAPageImage from '../images/build-a-page.jpg';
import DevSquadImage from '../images/dev-squad.jpg';
import ExcavationImage from '../images/excavation.jpg';
import ContactBookImage from '../images/contact-book.jpg';
import GithubFinderImage from '../images/github-finder.jpg';
import ITLoggerImage from '../images/it-logger.jpg';
import axios from 'axios';

const Projects = () => {
  //*CONFIGURATIONS AND KEYS
  let githubClientId;
  let githubClientSecret;
  // let unsplashAccess;
  // let fakeKey;

  if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    // unsplashAccess=process.env.REACT_APP_MY_ACCESS
    // fakeKey=process.env.REACT_APP_MY_FAKE_ACCESS
  } else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
    // unsplashAccess=process.env.MY_ACCESS
  }

  //*STATE
  // GET the github data
  //loading state
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [top5Repos, setTop5Repos] = useState([]);
  const [error, setError] = useState(false);

  // * IMAGES IN ARRAY FOR EACH OF THE TOP 5 POSTERS
  // *Ideally will come from the unsplash api and made as a piece of state merged with the github api
  const [images, setImages] = useState([
    {
      id: 0,
      imageId: 435850053,
      imageRep: ITLoggerImage,
      imageName: 'IT-Logger'
    },
    {
      id: 1,
      imageId: 426586061,
      imageRep: ContactBookImage,
      imageName: 'Contact-Book'
    },
    {
      id: 2,
      imageId: 421770170,
      imageRep: GithubFinderImage,
      imageName: 'Github-Finder'
    },
    {
      id: 3,
      imageId: 391642169,
      imageRep: ExcavationImage,
      imageName: 'GP-Excavation'
    },
    {
      id: 4,
      imageId: 383392571,
      imageRep: DevSquadImage,
      imageName: 'DevSquad'
    }
  ]);

  console.log('projects', projects);

  // *VARIABLES FOR THE GITHUB API
  const baseUrl = `https://api.github.com/users/GregPetropoulos`;
  const repoUrl = `/repos?per_page=100&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`;
  const allRepoUrl = `${baseUrl}${repoUrl}`;

  // *VARIABLES FOR THE UNSPLASH API
  // const baseUrlUnsplash=`https://api.unsplash.com/photos/?client_id=${fakeKey}`

  // console.log('baseUrlUnsplash',baseUrlUnsplash);

  //*THE CALL TO GH *GET THE TOP 5
  useEffect(() => {
    console.log('useEffect project axios call here');
    // loader while function gets response
    // calling on the github api
    const getAllRepos = async () => {
      try {
        setError(false);
        setLoading(true);
        const res = await axios.get(allRepoUrl);
        const results = res.data;
        // setProjects(prev=> ({...prev,[results]:results}))
        setProjects([...results]);

        console.log('res.data', res.data);
        // console.log('projects.results', projects.results[5]);
        console.log('projects', projects);
        // return res;
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    getAllRepos();

    //* calling on the unsplash api
    // const repoUnsplashImages = async () => {
    //   const res = await axios.get(`${baseUrlUnsplash}`)
    //   setImages(res.data);
    //   console.log('res.data', res.data);
    //   console.log('baseUrlUnsplash',baseUrlUnsplash);
    //   return res;
    // }
    // repoUnsplashImages()
  }, []);

  // *RETURNS TOP 5 ARRAY AND HARDCODED IMAGES ARRAY

  // console.log("projects.results", projects.results[5]);

  // *RETURNS RANDOM
  const isRandom = () => {
    if (projects !== null) {
      const randMatch = () =>
        projects.filter((item) => !images.find((t5) => item.id === t5.imageId));
      if (randMatch) {
        Math.floor(Math.random() * randMatch.length);
        return randMatch();
      }
    }
  };

  // * NO TRENDING FUNCTION NEEDED FOR TRENDING CATEGORY SINCE GITHUB API IS RETURNING THE LATEST REPOS
  // console.table(projects)
  // console.log('KEY CHECK HERE',process.env.MY_ACCESS);
  // console.log('KEY CHECK HERE',process.env.REACT_APP_MY_FAKE_KEY);
  // const {imageRep}= top5Repos

  const top5Arr = projects.filter((item) =>
    images.find((t5) => item.id === t5.imageId)
  );
  const imageMatch = images;
  const combo5And5 = top5Arr.concat(imageMatch);
  const adder = () => {
    setTop5Repos(combo5And5);
  };

  // const comboRepImg = () => {
  // top5Arr.concat(imageMatch)
  // setTop5Repos([top5Arr, images])
  // }
  // const comboRepImg = projects.filter((item) => top5.find((t5) => item.id === t5.id).map(arr5=> imageMatch.filter(img=> imageMatch.imageId===arr5.id) ))
  // console.log("comboRepImg", comboRepImg);
  // console.log('comboRepImg',comboRepImg());
  console.log('top5Repos', top5Repos);
  console.log('imagematch', imageMatch);
  console.log('top5Arr', top5Arr);
  console.log(loading === true);
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

      <div className='top-5-row'>
        <h2>My Top 5 Repos</h2>

        <ProjectItems isLarge={true} imageMatch={imageMatch} loading={loading} />
      </div>
      <div className='trending-row'>
        <h2>Trending</h2>

        <ProjectItems isLarge={false} imageMatch={imageMatch} loading={loading} />
      </div>
      <div className='random'>
        <h2>Random</h2>

        <ProjectItems isLarge={false} imageMatch={imageMatch} loading={loading} />
      </div>
    </Fragment>
  );
};
export default Projects;
