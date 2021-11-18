import React from 'react';
import Container from 'react-bootstrap/Container';
import Typewriter from 'typewriter-effect';
import './style.css';

import Particles from 'react-tsparticles';
import particlesConfig from '../../config/particlesConfig';

// const Land = ({ children }) => {
const Land = () => {
  return (
    <Container>
      <div
        className='Landing-Background'
        style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute' }}>
          <Particles height='100vh' width='100vw' params={particlesConfig} />
        </div>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1500)
              .changeDelay(80)
              .typeString(
                'Hi, my name is Greg Petropoulos and I enjoy creating websites and web applications.'
              )
              .pauseFor(2500)
              .deleteAll(10)
              .typeString('Hang out and get to know me.')
              .pauseFor(2500)
              .deleteAll(20)
              .typeString('I was a geologist, and discovered a dinosaur bone.')
              .pauseFor(2500)
              .deleteAll(30)
              .typeString(
                'I served in the U.S. Marines and learned quite a bit.'
              )
              .pauseFor(2500)
              .deleteAll(20)
              .pauseFor(3000)
              .typeString('Now I am a Web Developer')
              .pauseFor(3000)
              .deleteAll(20)
              .typeString('Greg Petropoulos')
              .pauseFor(7000)
              .deleteAll(20)
              .typeString(
                'Are you still here? Click around let me know what you think.'
              )
              .pauseFor(4000)
              .deleteAll(60)
              .start();
          }}
        />
      </div>
    </Container>
  );
};

export default Land;
