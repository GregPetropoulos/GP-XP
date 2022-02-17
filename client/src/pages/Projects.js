/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, Fragment } from 'react';
import ProjectItems from '../components/ProjectItems/ProjectItems';
// import Footer from "../components/Footer";
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
// import Unsplash, { toJson } from "unsplash-js";

// PROJECT IMAGES
import GolfImages from '../images/golf.jpg';
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
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState({
    repos: [],
    imageCheck: []
  });
  const [error, setError] = useState(false);

  // * IMAGES IN ARRAY ALL REPOS
  // *Ideally will come from the unsplash api and made as a piece of state merged with the github api ID numbers--I hardcoded these in
  // The repos relationships are id and imageId
  const [images, setImages] = useState([
    {
      id: 0,
      imageId: 435850053,
      imageRep: ITLoggerImage,
      imageName: 'IT-Logger-App',
      repo: {}
      // repo: '' added in by useEffect
    },
    {
      id: 1,
      imageId: 426586061,
      imageRep: ContactBookImage,
      imageName: 'Contact-Book',
      repo: {}
      // repo: '' added in by useEffect
    },
    {
      id: 2,
      imageId: 421770170,
      imageRep: GithubFinderImage,
      imageName: 'Github-Finder',
      repo: {}
      // repo: '' added in by useEffect
    },
    {
      id: 3,
      imageId: 391642169,
      imageRep: ExcavationImage,
      imageName: 'GP-Excavation',
      repo: {}

      // repo: '' added in by useEffect
    },
    {
      id: 4,
      imageId: 383392571,
      imageRep: DevSquadImage,
      imageName: 'Dev-Squad',
      repo: {}
      // repo: '' added in by useEffect
    },
    {
      id: 5,
      imageId: 365557403,
      imageRep: GolfImages,
      imageName: 'Golf-Assistant-App',
      repo: {}
      // repo: '' added in by useEffect
    }
  ]);
  //* DESTRUCTURE IMAGE STATE ARRAY
  const imageMatch = images;

  // *VARIABLES FOR THE GITHUB API
  const baseUrl = `https://api.github.com/users/GregPetropoulos`;
  const repoUrl = `/repos?per_page=100&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`;
  const allRepoUrl = `${baseUrl}${repoUrl}`;

  // *VARIABLES FOR THE UNSPLASH API
  // const baseUrlUnsplash=`https://api.unsplash.com/photos/?client_id=${fakeKey}`

  // console.log('baseUrlUnsplash',baseUrlUnsplash);

  //*THE CALL TO GH *GET ALL REPOS
  useEffect(() => {
    console.log('useEffect project axios call here');

    const getAllRepos = async () => {
      try {
        setError(false);
        setLoading(true);
        const res = await axios.get(allRepoUrl);
        const results = res.data;

        // return res;
        //* ADDING IMAGES AND REPOS TO PROJECTS STATE
        setProjects(() => ({
          repos: [...results],
          imageCheck: [...imageMatch]
        }));
        console.log('res.data', res.data);

        //* MAPPING THROUGH THE IMAGE STATE ADDING REPO OBJECT TO IMAGES STATE TO THE IMAGE PER IMAGEID
        const resultsCopy = results;
        setImages((prev) => {
          return prev.map((p) => ({
            ...p,
            ...{
              repo: resultsCopy.find(
                (item) => item.id === p.imageId && item.homepage
              )
            }
          }));
        });
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

  //* Randomly generating image for the Jumbotron
  const imageCopy = images;
  const randomNum = Math.floor(Math.random() * imageCopy.length);
  const randomJumboImage = imageCopy.filter((item) => item.id === randomNum);
  console.log('randomJumboImage', randomJumboImage);

  //* Truncate ellipse function from stack overflow
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  // * NO TRENDING FUNCTION NEEDED FOR TRENDING CATEGORY SINCE GITHUB API IS RETURNING THE LATEST REPOS
  // console.table(projects)
  // console.log('KEY CHECK HERE',process.env.MY_ACCESS);
  // console.log('KEY CHECK HERE',process.env.REACT_APP_MY_FAKE_KEY);

  console.log('images', images);
  console.log('projects', projects);
  // To get home page link use below:
  // console.log('imageA -- check', images[3].repo.homepage)
  if (loading) return <Spinner animation='border' variant='info' />;
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
      <div>
        <header
          className='jumbo'
          style={{
            backgroundSize: 'cover',

            backgroundImage: `url(${randomJumboImage[0].imageRep})`,
            backgroundPosition: 'center center'
          }}>
          <div className='jumbo-contents'>
            <h1 className='jumbo-title'>{randomJumboImage[0].imageName}</h1>
            <div className='jumbo-buttons'>
              <button className='jumbo-button'>Play</button>
              <button className='jumbo-button'>My List</button>
            </div>
            <h1 className='jumbo-description'>
              {truncate(randomJumboImage[0].repo.description, 150)}
            </h1>
          </div>
          <div className='jumbo-fade-bottom' />
        </header>
      </div>
      <div className='top-5-row'>
        <h2>My Top 5 Repos</h2>
        <div className='row-posters'>
          <ProjectItems
            loading={loading}
            projects={projects}
            isLarge={true}
            top5={true}
          />
        </div>
      </div>
      <div className='trending-row'>
        <h2>Trending</h2>
        <div className='row-posters'>
          <ProjectItems
            isLarge={false}
            projects={projects}
            loading={loading}
            top5={false}
          />
        </div>
      </div>
      <div className='random-row'>
        <h2>Random</h2>
        <div className='row-posters'>
          <ProjectItems
            isLarge={false}
            projects={projects}
            loading={loading}
            top5={false}
          />
        </div>
      </div>

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
export default Projects;
