import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ProjectData from '../assets/images/ProjectData';
import Spinner from '../components/Spinner';
import ProjectItems from '../components/ProjectItems';

const Projects = () => {
  const imageArr = ProjectData();
  // const [projectData, SetProjectData]=useState(imageArr)
  // console.log("imageArr from image arrays",projectData)

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
  const errorRef = useRef(false);
  // const [data, SetData] = useState([]);
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
    let isMounted = false;
    // console.log('useEffect project axios call here');
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    //TODO Show all top 10 repo projects on projects page
    const getAllRepos = async () => {
      try {
        errorRef.current = false;
        setLoading(true);
        // const res = await Promise.all([
        //   axios.get(repo1),
        // axios.get(repo2),
        // axios.get(repo3)
        // ]);
        const res = await axios.get(allRepoUrl, {
          cancelToken: source.token
        });
        const results = res.data;
        // console.log('fetch results', results);

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
        errorRef.current = true;
        throw Error('Promise Failed', error.message);
      }
      setLoading(false);
      // clean up return
      return () => {
        // cancel the request before component unmounts
        source.cancel();
      };
    };
    return () => (isMounted = false);
    // getAllRepos();
  }, []);

  if (loading) return <Spinner />;
  return (
    <section>
      <p className='ml-3 text-xl text-secondary-content sm:text-3xl '>
        &lt;projects&gt;
      </p>
      <div className=' m-2 flex flex-row justify-center'>
        <small className=' text-xsm text-center'>
          **Note: All my projects were recently migrated from Heroku to Render
          and may take 45-120 seconds to spin up the servers once loaded{' '}
        </small>
      </div>
      <div className='inline-block sm:flex sm:justify-around'>
        {imageArr.map((data) => (
          <ProjectItems loading={loading} data={data} key={data.id} />
        ))}
      </div>

      <p className='ml-3 text-xl text-secondary-content sm:text-3xl'>
        &lt;/projects&gt;
      </p>
    </section>
  );
};
export default Projects;
