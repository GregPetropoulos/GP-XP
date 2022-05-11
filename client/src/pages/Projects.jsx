/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, Suspense, useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import DevSquad from '../assets/images/dev-squad.webp';
import ITLogger from '../assets/images/it-logger.webp';
import SupportDesk from '../assets/images/support-desk.webp';

// PROJECT IMAGES
// const ProjectItems = lazy(() => import('../components/ProjectItems'));
// import ProjectItems  from '../components/ProjectItems/ProjectItems'

const Projects = () => {
  //*CONFIGURATIONS AND KEYS
  let githubClientId;
  let githubClientSecret;

  if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  } else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
  }

  //*STATE
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, SetData] = useState([]);
  // The repos relationships are id and imageId
  // const [images, setImages] = useState(ProjectImage);

  // *VARIABLES FOR THE GITHUB API
  const baseUrl = `https://api.github.com/users/GregPetropoulos`;
  const repoUrl = `/repos?per_page=100&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`;
  const allRepoUrl = `${baseUrl}${repoUrl}`;
  // const repo1 = `https://api.github.com/GregPetropoulos/SupportDesk/?&client_id=${githubClientId}&client_secret=${githubClientSecret}`;
  // const repo2 = `https://api.github.com/GregPetropoulos/IT-Logger-App`;
  // const repo3 = `https://api.github.com/GregPetropoulos/Dev-Squad`;

  //*THE CALL TO GH All REPOS ONLY NEED 3 REPOS
  useEffect(() => {
    // console.log('useEffect project axios call here');

    const getAllRepos = async () => {
      try {
        setError(false);
        setLoading(true);
        // const res = await Promise.all([
        //   axios.get(repo1),
        // axios.get(repo2),
        // axios.get(repo3)
        // ]);
        const res = await axios.get(allRepoUrl);
        const results = res.data;
        console.log(results);

        // return res;
        // console.log('res.data', res.data);

        //* MAPPING THROUGH THE IMAGE STATE ADDING REPO OBJECT TO IMAGES STATE TO THE IMAGE PER IMAGEID
        // const resultsCopy = results;
        // setImages((prev) => {
        //   return prev.map((p) => ({
        //     ...p,
        //     ...{
        //       repo: resultsCopy.find(
        //         (item) => item.id === p.imageId && item.homepage
        //       )
        //     }
        //   }));
        // });
      } catch (error) {
        setError(true);
        throw Error('Promise Failed');
      }
      setLoading(false);
    };

    getAllRepos();
  }, []);

  //* Randomly generating image for the Jumbotron
  // const imageCopy = [...images];
  // const randomNum = Math.floor(Math.random() * imageCopy.length);
  // const randomJumboImage = imageCopy.filter((item) => item.id === randomNum);
  // console.log('imageCopy', imageCopy);
  //* Truncate ellipse function from stack overflow
  // function truncate(str, n) {
  //   return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  // }

  // FOR THE BUTTONS/LINKS
  // target='_blank'
  // rel='noreferrer'
  // href='https://support-desk-services.herokuapp.com/'
  // href='https://github.com/GregPetropoulos/SupportDesk'
  // -----
  // href='https://dev-talk-dev.herokuapp.com/'
  // href=' https://github.com/GregPetropoulos/Dev-Squad'
  // ------
  // href='https://it-loggerv1.herokuapp.com/'
  // href='https://github.com/GregPetropoulos/IT-Logger-App'

  if (loading) return <div>spinner...needed here</div>;
  return (
    <Fragment>
      <div>
        <p
          className='page-title'
          style={{
            fontSize: '1.4rem',
            color: '#d6b850'
          }}>
          &lt;projects&gt;
        </p>
      </div>
      <div>Project cards here</div>

      <p
        className='page-title'
        style={{
          fontSize: '1.4rem',
          color: '#d6b850'
        }}>
        &lt;/projects&gt;
      </p>
    </Fragment>
  );
};
export default Projects;
