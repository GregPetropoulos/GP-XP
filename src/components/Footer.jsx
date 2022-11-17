import { Fragment } from 'react';
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Fragment>
    {/* // <div className='flex flex-col align-middle justify-center'> */}
      <div className=' flex flex-row-reverse flex-wrap  align-middle  text-center my-3 mx-20  justify-evenly sm:justify-center sm:flex-nowrap sm:flex-row'
       >
        <a
          href='https://github.com/GregPetropoulos'
          target='_blank'
          rel='noreferrer'
          style={{ color: '#F4CBB2' }}
          className=' m-2 hover:scale-125 transition ease-in-out'>
          <FontAwesomeIcon className='icon' icon={faGithub} size='2x' />
        </a>

        <a
          href='https://linkedin.com/in/greg-petropoulos-b186b954'
          target='_blank'
          rel='noreferrer'
          style={{ color: '#0e76a8' }}
          className=' m-2 hover:scale-125 transition ease-in-out'>
          <FontAwesomeIcon className='icon' icon={faLinkedin} size='2x' />
        </a>
        <a
          href='https://www.youtube.com/channel/UC59RJzqORuQTPjePJVml-pw'
          target='_blank'
          rel='noreferrer'
          style={{ color: '#FF0000' }}
          className=' m-2 hover:scale-125 transition ease-in-out '>
          <FontAwesomeIcon className='icon' icon={faYoutube} size='2x' />
        </a>
        <a
          href='https://twitter.com/GregoriosPetro1'
          target='_blank'
          rel='noreferrer'
          style={{ color: '#1DA1F2' }}
          className='m-2 hover:scale-125 transition ease-in-out '>
          <FontAwesomeIcon className='icon' icon={faTwitter} size='2x' />
        </a>
      </div>
      </Fragment>
  );
};

export default Footer;
