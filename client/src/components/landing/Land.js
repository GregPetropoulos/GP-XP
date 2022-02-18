import React, { Fragment } from 'react';
import Typewriter from 'typewriter-effect';
import './style.css';
import MainFooter from '../mainFooter/MainFooter';

const Land = () => {
  return (
    <Fragment>
      {/* <Container> */}
      {/* <Row>
        <Col lg={8}> */}
        
        
   <div className="land-wrapper">


          <h2>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1500)
                  .changeDelay(80)
                  .typeString(
                    'Hi, happy to see you made it over. My name is Greg Petropoulos and I enjoy creating websites and web applications.'
                  )
                  .pauseFor(2500)
                  .deleteAll(10)
                  .typeString('Hang out and get to know me.')
                  .pauseFor(3000)
                  .deleteAll(20)
                  .typeString('Greg Petropoulos')
                  .pauseFor(15000)
                  .deleteAll(20)
                  .start();
              }}
            />
          </h2>
          {/* </Col>
      </Row> */}
      {/* </Container> */}
      </div>
<MainFooter/>
    </Fragment>
  );
};

export default Land;
