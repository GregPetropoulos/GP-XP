/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, Suspense, useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import ProjectImages from '../assets/images/ProjectImages';

import ProjectItems from '../components/ProjectItems';


const Projects = () => {

const [projectData, SetProjectData]=useState(ProjectItems)

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

{/* <ProjectItems loading={loading} projImages={projImages} /> */}
{/* <ProjectItems loading={loading} cardImage={MobileITSupport} /> */}
{/* <ProjectItems loading={loading} cardImage={MobileDevSquad} /> */}




{/* ----------------OLD------------------- */}
      {/* <div className='flex flex-col justify-center align-middle'>


        <div className='flex flex-row w-full justify-center'>
          <div className='w-1/2'><p>project1</p></div>
        </div>

        <div className='flex w-full flex-row sm:flex-wrap justify-center'>
          <div className='w-full sm:w-1/2'><p>project2</p></div>
          <div className='w-full sm:w-1/2'><p>project3</p></div>
        </div>
      
      </div>

      <div className=' flex flex-col w-full justify-center align-middle'> */}
        {/* CARD1------------- */}
        {/* <div className='flex flex-row justify-center w-60'>
          <div className=' card-normal  bg-base-100 rounded-xl shadow-xl hover:outline mt-3'>
            <figure className='rounded-xl'>
              <img src={SupportDesk} alt={''} />
            </figure>
            <div className='card-body bg-secondary'>
              <h2 className='card-title text-center'>Support Desk Services</h2>
              <p>lorem stuff here</p>

              <div className='card-actions justify-around'>
                <button className='btn  btn-xs btn-primary'>Live Demo</button>
                <button className='btn  btn-xs btn-primary'>Deployed</button>
                <button className='btn  btn-xs btn-primary'>Github</button>
              </div>
            </div>
          </div>
        </div>
        </div> */}
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
