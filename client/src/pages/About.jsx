import {Fragment} from 'react';

import AboutSection from '../components/AboutSection';
// import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Fragment>
      <p
        className='page-title'
        style={{
          fontSize: '1.4rem',
          color: '#08a7ce'
        }}>
        &lt;about&gt;
      </p>

      <AboutSection />
      <p
        className='page-title'
        style={{
          fontSize: '1.4rem',
          color: '#08a7ce'
        }}>
        &lt;/about&gt;
      </p>
    </Fragment>
  );
};

export default About;
