import {Fragment} from 'react'
import GregPetropoulosResume from '../assets/resume/React_Full_Stack_Greg_Petropoulos_Resume_5.10.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faMdb,
  faReact,
  faNodeJs,
  faSketch,
  faCodepen,
  faConfluence,
  faPushed
} from '@fortawesome/free-brands-svg-icons';

const AboutSection = () => {
  return (
<Fragment>   
            <p>
              I am proficient in the MERN stack, MongoDB, Express, Node, and
              React. My foundational knowledge includes JavaScript, HTML, CSS
              and I am open to learning new technologies.
            </p>
              <FontAwesomeIcon
                className='skill-icon'
                icon={faReact}
                size='6x'
                color='#61DBFB'
                style={{ background: '#000' }}
                fixedWidth
              />

              <FontAwesomeIcon
                className='skill-icon'
                icon={faJs}
                size='6x'
                color='#f0db4f'
                style={{ background: '#323330' }}
                fixedWidth
              />

              <FontAwesomeIcon
                className='skill-icon'
                icon={faMdb}
                size='6x'
                color='#E8E7D5'
                style={{ background: '#3FA037' }}
                fixedWidth
              />

              <FontAwesomeIcon
                className='skill-icon'
                icon={faNodeJs}
                size='6x'
                color='#3c873a'
                style={{ background: '#303030' }}
                fixedWidth
              />
              <FontAwesomeIcon
                className='skill-icon'
                icon={faHtml5}
                size='5x'
                color='#E34C26'
                style={{ background: '#EBEBEB' }}
                fixedWidth
              />
              <FontAwesomeIcon
                className='skill-icon'
                icon={faCss3}
                size='5x'
                color='#2965f1'
                style={{ background: '#EBEBEB' }}
                fixedWidth
              />
          <p className='about-1p'>
            I am a Full Stack Web Developer with a background in geologic
            sciences and always eager to learn and collaborate.
            <br />A sleuth at heart, I find discovery and fulfillment rewarding
            and web development offers an opportunity to create value and
            utilize my strengths. I am React/JavaScript enthusiast and enjoy
            bringing applications to life.
          </p>
            <p className='about-2p'>
              I have created several web applications with the key methods in
              mind for rich user experiences.
            </p>
              <span className='about-3p'></span>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      className='bullet-icon'
                      icon={faCodepen}
                      size='2x'
                      color='#fff'
                      style={{ background: '#000' }}
                      fixedWidth
                    />
                    Pragmatic design and development of responsive web
                    applications
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className='bullet-icon'
                      icon={faSketch}
                      size='2x'
                      color='#fff'
                      style={{ background: '#000' }}
                      fixedWidth
                    />
                    Stylistic and functional UI/UX, use of multiple API’s, and
                    third party integrations & database
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className='bullet-icon'
                      icon={faConfluence}
                      size='2x'
                      color='#fff'
                      style={{ background: '#000' }}
                      fixedWidth
                    />
                    Models, Views, Controllers paradigm
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className='bullet-icon'
                      icon={faPushed}
                      size='2x'
                      color='#fff'
                      style={{ background: '#000' }}
                      fixedWidth
                    />
                    Outcome oriented and AGILE project management.
                  </li>
                </ul>
        <p className='about-4p'>
          <span></span>
          Outside of web development I enjoy spending time with my family,
          working out, cooking, and exploring old treasure maps.
        </p>
            <a
              href={GregPetropoulosResume}
              download
              style={{ color: '#d6b850' }}>
              Resume
            </a>
            <a
              href='https://github.com/GregPetropoulos'
              target='_blank'
              rel='noreferrer'>
              Github
            </a>

</Fragment>
  )
};
export default AboutSection;
