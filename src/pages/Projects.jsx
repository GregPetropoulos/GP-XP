import React, { useState } from 'react';
import projectData from '../assets/data/projectData';
import Spinner from '../components/Spinner';
import Meta from '../components/Meta';
import { truncateString } from '../utils';

const Card = ({ item, handleLink }) => {
  return (
    <div className='rounded-t-[8px] card bg-secondary shadow-xl m-4 border '>
      <figure className='rounded-t-[6px]'>
        <img className='rounded-t-[6px] overflow-hidden' src={item.mobileImage} alt='project' />
      </figure>
      <div className='card-body overflow-y-scroll max-h-64'>
        <h2 className='card-title text-white tracking-tighter'>{item.projectName}</h2>
        <p>{truncateString(item.description, 220)}</p>
        <div className='card-actions justify-center'>
          {item.tech.map((item, index) => (
            <div key={index} className='flex flex-row m-1'>
              {item === 'React' || item === 'React Native' ? (
                <div className='badge badge-info'>{item}</div>
              ) : (
                <div className='badge badge-ghost badge-outline'>{item}</div>
              )}
            </div>
          ))}
        </div>
        <div className='card-actions'>
          <button className='btn btn-primary btn-outline' onClick={() => handleLink(item.deployed)}>
            Go to
          </button>
        </div>
      </div>
    </div>
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
      externalUrl === 'https://www.jhm.org/' ||
      externalUrl === 'https://apps.apple.com/us/app/sa-cornerstone/id1664265654'
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
        <div className='w-full'>
          <p className='ml-3 text-xl text-secondary-content sm:text-3xl '>&lt;projects&gt;</p>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className=' text-center text-2xl '>
            Thanks for coming by, I have compiled a list of my current work, open source and
            freelance projects.
          </h3>
        </div>
        <div className='w-full flex flex-row flex-wrap justify-center'>
          <div className='flex flex-col w-full  md:w-1/3 sm:w-1/2'>
            <h2 className='text-center text-white text-4xl mt-8'>Websites</h2>
            {projectData
              .sort((a, b) => b.id - a.id)
              .map(
                (item) =>
                  item.type === 'website' && (
                    <Card key={item.id} item={item} handleLink={handleLink} />
                  )
              )}
          </div>
          <div className='flex flex-col w-full md:w-1/3 sm:w-1/2'>
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
