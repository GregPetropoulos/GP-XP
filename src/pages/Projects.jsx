import React, { useState} from 'react';
// import axios from 'axios';
import projectData from '../assets/data/projectData';
import Spinner from '../components/Spinner';
// import ProjectItems from '../components/ProjectItems';
import Meta from '../components/Meta';
import { truncateString } from '../utils';

const Projects = () => {

  // const [projectData, SetProjectData]=useState(imageArr)
  // console.log("imageArr from image arrays",projectData)

  //*CONFIGURATIONS AND KEYS
  // let githubClientId;
  // let githubClientSecret;

  // if (process.env.NODE_ENV !== 'production') {
  //   githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  //   githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  // } else {
  //   githubClientId = process.env.GITHUB_CLIENT_ID;
  //   githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
  // }

  //*STATE
  const [loading, setLoading] = useState(false);
  // const errorRef = useRef(false);
  // const [data, SetData] = useState([]);
  // The repos relationships are id and imageId
  // const [images, setImages] = useState(ProjectImage);

  // *VARIABLES FOR THE GITHUB API
  // const baseUrl = `https://api.github.com/users/GregPetropoulos`;
  // const repoUrl = `/repos?per_page=100&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`;
  // const allRepoUrl = `${baseUrl}${repoUrl}`;
  // const repo1 = `https://api.github.com/GregPetropoulos/SupportDesk/?&client_id=${githubClientId}&client_secret=${githubClientSecret}`;
  // const repo2 = `https://api.github.com/GregPetropoulos/IT-Logger-App`;
  // const repo3 = `https://api.github.com/GregPetropoulos/Dev-Squad`;

  //*THE CALL TO GH All REPOS ONLY NEED 3 REPOS
  // useEffect(() => {
  //   let isMounted = false;
  //   // console.log('useEffect project axios call here');
  //   const CancelToken = axios.CancelToken;
  //   const source = CancelToken.source();

  //   //TODO Show all top 10 repo projects on projects page
  //   const getAllRepos = async () => {
  //     try {
  //       errorRef.current = false;
  //       setLoading(true);
  //       // const res = await Promise.all([
  //       //   axios.get(repo1),
  //       // axios.get(repo2),
  //       // axios.get(repo3)
  //       // ]);
  //       const res = await axios.get(allRepoUrl, {
  //         cancelToken: source.token
  //       });
  //       const results = res.data;
  //       // console.log('fetch results', results);

  //       // return res;
  //       // console.log('res.data', res.data);

  //       //* MAPPING THROUGH THE IMAGE STATE ADDING REPO OBJECT TO IMAGES STATE TO THE IMAGE PER IMAGEID
  //       // const resultsCopy = results;
  //       // setImages((prev) => {
  //       //   return prev.map((p) => ({
  //       //     ...p,
  //       //     ...{
  //       //       repo: resultsCopy.find(
  //       //         (item) => item.id === p.imageId && item.homepage
  //       //       )
  //       //     }
  //       //   }));
  //       // });
  //     } catch (error) {
  //       errorRef.current = true;
  //       throw Error('Promise Failed', error.message);
  //     }
  //     setLoading(false);
  //     // clean up return
  //     return () => {
  //       // cancel the request before component unmounts
  //       source.cancel();
  //     };
  //   };
  //   return () => (isMounted = false);
  //   // getAllRepos();
  // }, []);
  loading && <Spinner />;
  return (
    <>
      <Meta
        title='Greg Petropoulos react developer project page'
        description='Projects page with fullstack applications built by the react developer Greg Petropoulos'
      />
      <section>
        <p className='ml-3 text-xl text-secondary-content sm:text-3xl '>&lt;projects&gt;</p>
        <div className='flex flex-col  w-full items-center flex-wrap'>
          {projectData.map((item) => (
            <a
              href={item.deployed}
              key={item.id}
              target='_blank'
              rel='noopener noreferrer'
              alt={'link to' + item.projectName}
              className='flex flex-col items-center  m-4 bg-white border border-gray-200 rounded-lg shadow sm:flex-row sm:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-secondary dark:hover:bg-gray-700'
            >
              <img
                className='object-cover w-full rounded-t-lg h-48 sm:h-auto sm:w-28 sm:rounded-none sm:rounded-l-lg'
                src={item.mobileImage}
                alt={'image of' + item.projectName}
              />
              <div className='flex flex-col justify-between p-4  leading-normal'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {item.projectName}
                </h5>
                <p className=' mb-3 font-normal text-gray-700 dark:text-gray-400'>
                 {truncateString(item.description,220)}
                </p>
                <p>{item.tech}</p>
              </div>
            </a>
          ))}
        </div>
        <p className='ml-3 text-xl text-secondary-content sm:text-3xl'>&lt;/projects&gt;</p>
      </section>
    </>
  );
};
export default Projects;
