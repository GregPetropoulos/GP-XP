/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, Fragment } from 'react';
import ProjectItems from '../components/ProjectItems/ProjectItems';
import Spinner from 'react-bootstrap/Spinner';
// import Unsplash, { toJson } from "unsplash-js";

// PROJECT IMAGES
import { ProjectImage } from '../images/ProjectImage';
// import ProjectTrackerImage from '../images/project-tracker.png';
// import GolfImages from '../images/golf.png';
// import EmployeeImage from '../images/employee-directory.png';
// import FitImage from '../images/fit-tracker.png';
// import BuildAPageImage from '../images/build-a-page.png';
// import DevSquadImage from '../images/dev-squad.png';
// import ExcavationImage from '../images/excavation.png';
// import ContactBookImage from '../images/contact-book.png';
// import GithubFinderImage from '../images/github-finder.png';
// import ITLoggerImage from '../images/it-logger.png';
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
  const [error, setError] = useState(false);
  // const [projects, setProjects] = useState({
  //   repos: [],
  //   imageCheck: []
  // });

  // * IMAGES IN ARRAY ALL REPOS
  // *Ideally will come from the unsplash api and made as a piece of state merged with the github api ID numbers--I hardcoded these in
  // The repos relationships are id and imageId
  const [images, setImages] = useState(ProjectImage);
  
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
    // console.log('useEffect project axios call here');

    const getAllRepos = async () => {
      try {
        setError(false);
        setLoading(true);
        const res = await axios.get(allRepoUrl);
        const results = res.data;
        // console.log(results);

        //ADDING IMAGES AND REPOS TO PROJECTS STATE
        // setProjects(() => ({
        //   repos: [...results],
        //   imageCheck: [...imageMatch]
        // }));
        // return res;
        // console.log('res.data', res.data);

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
  const imageCopy = [...images]
  const randomNum = Math.floor(Math.random() * imageCopy.length);
  const randomJumboImage = imageCopy.filter((item) => item.id === randomNum);

  //* Truncate ellipse function from stack overflow
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  // * NO TRENDING FUNCTION NEEDED FOR TRENDING CATEGORY SINCE GITHUB API IS RETURNING THE LATEST REPOS
  // console.table(projects)
  // console.log('KEY CHECK HERE',process.env.MY_ACCESS);
  // console.log('KEY CHECK HERE',process.env.REACT_APP_MY_FAKE_KEY);
  if (loading)
    return (
      <div
        style={{
          width: '100',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Spinner animation='border' variant='info' size='lg' />
      </div>
    );
  return (
    <Fragment>
      <div>
        <p className='page-title'
          style={{
            fontSize: '1.4rem',
            color: '#d6b850'
          }}>
          &lt;projects&gt;
        </p>
      </div>
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
              <button
                className='jumbo-button'
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    randomJumboImage[0].repo.homepage,
                    '_blank',
                    'noreferrer noopener'
                  );
                }}>
                See In Action
              </button>
              <button
                className='jumbo-button'
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    randomJumboImage[0].repo.html_url,
                    '_blank',
                    'noreferrer noopener'
                  );
                }}>
                Github
              </button>
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
            images={images}
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
            images={images}
            loading={loading}
            top5={false}
          />
        </div>
      </div>
      <div>
        <p className='page-title'
          style={{
            fontSize: '1.4rem',
            color: '#d6b850'
          }}>
          &lt;/projects&gt;
        </p>
      </div>
    </Fragment>
  );
};
export default Projects;
