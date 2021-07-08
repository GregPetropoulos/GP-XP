import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

const styledTypewriter = styled.typewriter`
  color: red;
`;

const LandPage = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col>
          {children}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2000)
                .changeDelay(80)
                .typeString('Hello, thank you for stopping by')
                .pauseFor(3000)
                .deleteAll(50)
                .typeString(
                  'Do you enjoy rich website and application user experiences?'
                )
                .pauseFor(2500)
                .deleteAll(100)
                .typeString("Of course you do that's why you are here")
                .pauseFor(2500)
                .deleteAll(100)
                .typeString('I am a Software Engineer')
                .deleteChars(17)
                .pauseFor(3000)
                .typeString('Web Developer')
                .deleteChars(15)
                .typeString('Greg Petropoulos')
                .pauseFor(3000)

                .start();
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LandPage;
