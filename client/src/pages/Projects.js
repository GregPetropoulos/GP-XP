/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, Suspense, useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import DevSquad from '../images/dev-squad.webp';
import ITLogger from '../images/it-logger.webp';
import SupportDesk from '../images/support-desk.webp';

// PROJECT IMAGES
// import ProjectImage from '../images/ProjectImage';
import { ProjectImage } from '../images/ProjectImage';
const ProjectItems = lazy(() =>
  import('../components/ProjectItems/ProjectItems')
);
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
        <p
          className='page-title'
          style={{
            fontSize: '1.4rem',
            color: '#d6b850'
          }}>
          &lt;projects&gt;
        </p>
      </div>

      <CardGroup
        style={{ width: '100%', gap: '14px', margin: '2px', padding: '2xp' }}>
        <Card bg='dark'>
          <Card.Link
            href='https://support-desk-services.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
            alt=''>
            <Card.Img variant='top' src={SupportDesk}></Card.Img>
          </Card.Link>
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>
              Support Desk Services
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Button
            variant='outline-danger'
            size='md'
            style={{ width: '100%' }}
            target='_blank'
            rel='noreferrer'
            href=''>
            Live Demo
          </Button>

          <div
            style={{
              display: 'flex',
              margin: '6px',
              justifyContent: 'space-around'
            }}>
            <Button
              variant='info'
              size='sm'
              style={{ width: '50%', marginRight: '5px' }}
              target='_blank'
              rel='noreferrer'
              href='https://support-desk-services.herokuapp.com/'>
              Deployed
            </Button>
            <Button
              variant='info'
              size='sm'
              style={{ width: '50%',marginLeft: '5px'  }}
              target='_blank'
              rel='noreferrer'
              href='https://github.com/GregPetropoulos/SupportDesk'>
              Github
            </Button>
          </div>
        </Card>
        <Card bg='dark'>
          <Card.Link
            href='https://dev-talk-dev.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
            alt=''>
            <Card.Img variant='top' src={DevSquad}></Card.Img>
          </Card.Link>
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>Dev Squad</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>

          <Button
            variant='outline-danger'
            size='md'
            style={{ width: '100%' }}
            target='_blank'
            rel='noreferrer'
            href=''>
            Live Demo
          </Button>
          <div
            style={{
              display: 'flex',
              margin: '6px',
              justifyContent: 'space-around'
            }}>
            <Button
              variant='info'
              size='sm'
              style={{ width: '50%', marginRight: '5px' }}
              target='_blank'
              rel='noreferrer'
              href='https://dev-talk-dev.herokuapp.com/'>
              Deployed
            </Button>

            <Button
              variant='info'
              size='sm'
              style={{ width: '50%',marginLeft: '5px'  }}
              target='_blank'
              rel='noreferrer'
              href=' https://github.com/GregPetropoulos/Dev-Squad'>
              Github
            </Button>
          </div>
        </Card>
        <Card bg='dark'>
          <Card.Link
            href='https://it-loggerv1.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
            alt=''>
            <Card.Img variant='top' src={ITLogger}></Card.Img>
          </Card.Link>
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>
              IT-Logger (Internal)
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Button
            variant='outline-danger'
            size='md'
            style={{}}
            target='_blank'
            rel='noreferrer'
            href=''>
            Live Demo
          </Button>

          <div
            style={{
              display: 'flex',
              margin: '6px',
              justifyContent: 'space-around'
            }}>
            <Button
              variant='info'
              size='sm'
              style={{ width: '50%', marginRight: '5px' }}
              target='_blank'
              rel='noreferrer'
              href='https://it-loggerv1.herokuapp.com/'>
              Deployed
            </Button>
            <Button
              variant='info'
              size='sm'
              style={{ width: '50%', marginLeft: '5px'   }}
              target='_blank'
              rel='noreferrer'
              href='https://github.com/GregPetropoulos/IT-Logger-App'>
              Github
            </Button>
          </div>
        </Card>
      </CardGroup>

      {/* <div>
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
      </div> */}

      {/* <div className='top-5-row'>
        <h2>My Top 5 Repos</h2>

        <div className='row-posters'>
          <Suspense
            fallback={
              <h1 className='loading-spinner'>
                Loading.....
                <Spinner
                  className='spinner'
                  animation='border'
                  variant='primary'
                />
              </h1>
            }>
            <ProjectItems
              loading={loading}
              images={images}
              isLarge={true}
              top5={true}
            />
          </Suspense>
          /
        </div>
      </div>
      <div className='trending-row'>
        <h2>Trending</h2>

        <div className='row-posters'>
          <Suspense
            fallback={
              <h1 className='loading-spinner'>
                Loading.....
                <Spinner
                  className='spinner'
                  animation='border'
                  variant='primary'
                />
              </h1>
            }>
            <ProjectItems
              isLarge={false}
              images={images}
              loading={loading}
              top5={false}
            />
          </Suspense>
        </div>
      </div>
      <div> */}
      <p
        className='page-title'
        style={{
          fontSize: '1.4rem',
          color: '#d6b850'
        }}>
        &lt;/projects&gt;
      </p>
      {/* </div> */}
    </Fragment>
  );
};
export default Projects;
