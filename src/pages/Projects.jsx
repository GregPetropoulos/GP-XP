import React, { useState } from 'react';
import projectData from '../assets/data/projectData';
import Spinner from '../components/Spinner';
import Meta from '../components/Meta';
import { truncateString } from '../utils';

const Card = ({ item, handleLink }) => {
  return (
    <button
      onClick={() => handleLink(item.deployed)}
      alt={'link to' + item.projectName}
      className='flex flex-col items-center mx-4 mt-4 bg-white border border-gray-200 rounded-lg shadow sm:flex-row sm:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-secondary dark:hover:bg-gray-700'
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
          {truncateString(item.description, 220)}
        </p>
        <div className='flex flex-row flex-wrap'>
          {item.tech.map((item, index) => (
            <div key={index} className='flex flex-col m-1'>
              {item === 'React' || item === 'React Native' ? (
                <div className='badge badge-info'>{item}</div>
              ) : (
                <div className='badge badge-ghost badge-outline'>{item}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </button>
  );
};

const Projects = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <Spinner
        msg={`The application clicked on is hosted on render's free tier and will take 60 seconds to spin up the backend server, thanks for looking and a new tab will open shortly! 😃 👋`}
      />
    );
  }
  const handleLink = (externalUrl) => {
    if (
      externalUrl === 'https://www.sacornerstone.org/' ||
      externalUrl === 'https://www.jhm.org/'
    ) {
      return window.open(externalUrl, '_blank', 'noreferrer');
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        return window.open(externalUrl, '_blank', 'noreferrer');
      }, 10000);
    }
  };
  return (
    <>
      {window.location.pathname === '/projects' && (
        <Meta
          title='Greg Petropoulos react developer project page'
          description='Projects page with fullstack applications built by the react developer Greg Petropoulos'
        />
      )}
      <section>
        <p className='ml-3 text-xl text-secondary-content sm:text-3xl '>&lt;projects&gt;</p>
        <div className='flex flex-col items-center'>
          <h3 className=' text-center text-2xl '>
            Thanks for coming by, I have compiled a list of my current work, open source and
            freelance projects.
          </h3>
        </div>
        <div className='w-full flex flex-row flex-wrap justify-center'>
          <div className='flex flex-col w-full items-center'>
            <h2 className='text-center text-white text-4xl mt-8'>Websites</h2>
            {projectData
              .sort((a, b) => b.year - a.year)
              .map(
                (item) =>
                  item.type === 'website' && (
                    <Card key={item.id} item={item} handleLink={handleLink} />
                  )
              )}
          </div>
          <div className='flex flex-col w-full items-center'>
            <h2 className='text-center text-white text-4xl mt-8'>Mobile Apps</h2>
            {projectData.map(
              (item) =>
                item.type === 'mobileApp' && (
                  <Card key={item.id} item={item} handleLink={handleLink} />
                )
            )}
          </div>
        </div>

        <p className='ml-3 text-xl text-secondary-content sm:text-3xl'>&lt;/projects&gt;</p>
      </section>
    </>
  );
};
export default Projects;
