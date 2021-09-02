import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Typewriter from 'typewriter-effect';
import './style.css';

// const Land = ({ children }) => {
const Land = () => {


  return (
    <Container>
      <Row className = 'typewriter-row'>
      <Col></Col>

        <Col lg={10} className='typewriter-column'>
          {/* {children} */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
              .pauseFor(1500)
              .changeDelay(80)
              .typeString('Hi, my name is Greg Petropoulos and I enjoy creating websites and web applications.')
              .pauseFor(2500)
              .deleteAll(10)
              .typeString(
                'Hang out and get to know me.'
                )
                .pauseFor(2500)
                .deleteAll(20)
                .typeString("I was a geologist, and discovered a dinosaur bone.")
                .pauseFor(2500)
                .deleteAll(30)
                .typeString('I served in the U.S. Marines and learned quite a bit.')
                .pauseFor(2500)
                .deleteAll(20)
                .pauseFor(3000)
                .typeString('Now I am a Web Developer')
                .pauseFor(3000)
                .deleteAll(20)
                .typeString('Greg Petropoulos')
                .pauseFor(7000)
                .deleteAll(20)
                .typeString('Are you still here? Click around let me know what you think.')
                .pauseFor(4000)
                .deleteAll(60)
                .start();
              }}
              />
        </Col>
        <Col></Col>

      </Row>
    </Container>
  );
};

export default Land;