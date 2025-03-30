import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faYoutube,
  faLinkedin,
  faXTwitter,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';

const Icons = () => {
  return (
    <section>
      <div className=' flex flex-row-reverse flex-wrap  align-middle  text-center my-3 mx-20  justify-evenly sm:justify-center sm:flex-nowrap sm:flex-row'>
        <a
          href='https://github.com/GregPetropoulos'
          target='_blank'
          rel='noreferrer'
          aria-description='Github Icon Link'
          style={{ color: '#F4CBB2' }}
          className=' m-2 hover:scale-125 transition ease-in-out'>
          <FontAwesomeIcon className='icon' icon={faGithub} size='2x' />
        </a>

        <a
          href='https://www.linkedin.com/in/greg-petropoulos'
          target='_blank'
          rel='noreferrer'
          aria-description='Linkedin Icon Link'
          style={{ color: '#0e76a8' }}
          className=' m-2 hover:scale-125 transition ease-in-out'>
          <FontAwesomeIcon className='icon' icon={faLinkedin} size='2x' />
        </a>
        <a
          href='https://www.youtube.com/channel/UC59RJzqORuQTPjePJVml-pw'
          target='_blank'
          rel='noreferrer'
          aria-description='Youtube Icon Link'
          style={{ color: '#FF0000' }}
          className=' m-2 hover:scale-125 transition ease-in-out '>
          <FontAwesomeIcon className='icon' icon={faYoutube} size='2x' />
        </a>
        <a
          href='https://twitter.com/GregoriosPetro1'
          target='_blank'
          rel='noreferrer'
          aria-description='Twitter Icon Link'
          style={{ color: '#1DA1F2' }}
          className='m-2 hover:scale-125 transition ease-in-out '>
          <FontAwesomeIcon className='icon' icon={faXTwitter} size='2x' />
        </a>
        <a
          href='https://discord.com/'
          target='_blank'
          rel='noreferrer'
          aria-description='Discord Icon Link to frontenddev_41360'
          style={{ color: '#7289DA' }}
          className='m-2 hover:scale-125 transition ease-in-out'>
          <FontAwesomeIcon className='icon' icon={faDiscord} size='2x' />
        </a>
      </div>
    </section>
  );
};
export default Icons;
