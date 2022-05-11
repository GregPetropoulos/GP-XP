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
      <a
        href='https://github.com/GregPetropoulos'
        target='_blank'
        rel='noreferrer'
        style={{ color: '#F4CBB2' }}>
        <FontAwesomeIcon className='icon' icon={faGithub} size='4x' />
      </a>

      <a
        href='https://linkedin.com/in/greg-petropoulos-b186b954'
        target='_blank'
        rel='noreferrer'
        style={{ color: '#0e76a8' }}>
        <FontAwesomeIcon className='icon' icon={faLinkedin} size='4x' />
      </a>
      <a
        href='https://www.youtube.com/channel/UC59RJzqORuQTPjePJVml-pw'
        target='_blank'
        rel='noreferrer'
        style={{ color: '#FF0000' }}>
        <FontAwesomeIcon className='icon' icon={faYoutube} size='4x' />
      </a>
      <a
        href='https://twitter.com/GregoriosPetro1'
        target='_blank'
        rel='noreferrer'
        style={{ color: '#1DA1F2' }}>
        <FontAwesomeIcon className='icon' icon={faTwitter} size='4x' />
      </a>
    </Fragment>
  );
};

export default Footer;
