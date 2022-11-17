import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import GregPetropoulosResume from '../assets/resume/Resume_10.20.22.docx';

const AboutSection = ({ data }) => {
  // const {}=data
  return (
    <Fragment>
      <div className='w-100 flex flex-col m-6 leading-relaxed text-sm sm:text-lg sm:items-center '>
        <div className=' text-center sm:items-center sm:justify-center sm:flex sm:w-1/2'>
          <p className='mb-3'>
            I enjoy learning new things and see myself as a pragmatic person. I
            find it rewarding to utilize my strengths in frontend web
            development to reach a common goal. Let's bring ideas to life! Click
            the link to learn more...
            <a
              href={GregPetropoulosResume}
              download='Greg-Petropoulos-React-Dev'
              className='ml-1'>
              {' '}
              <button className=' mt-1 btn btn-xs btn-outline btn-primary'>
                Resume
              </button>
            </a>
          </p>
        </div>

        {/* Tech */}
        <h2 className=' text-center text-primary mt-4 font-bold'>
          Technologies
        </h2>
        <div className='flex flex-row flex-start justify-around text-primary leading-relaxed sm:justify-between'>
          <ul>
            <span className='font-bold text-primary'>Frontend</span>
            <li className=''>JavaScript</li>
            <li>React</li>
            <li>Redux/RTK</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
          </ul>
          <div className='divider divider-horizontal text-primary sm:none'></div>
          <ul>
            <span className='font-bold text-primary'>Backend</span>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Git</li>
            <li>REST API</li>
          </ul>
        </div>

        {/* <Link to='/more-me' className='mt-16 text-center hover:animate-bounce'>
        More about me
        </Link> */}
      </div>
    </Fragment>
  );
};
export default AboutSection;
