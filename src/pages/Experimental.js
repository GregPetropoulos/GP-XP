import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import SVG from '../components/SVG';

const Experimental = () => {
  return (
    <Container>
      <Row>
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: '1.4rem',
            color: '#08a7ce'
          }}
        >
          &lt;experimental&gt;
        </p>
        <Col lg={12}>
        <h2 style={{ color: 'whitesmoke', textAlign:'center'}}>Animation Experiment</h2>
          <p
            className=''
            style={{
              border: '5px solid #d6b850',
              fontSize: '1.3rem',
              color: '#08a7ce',
              padding: '2%'
            }}
          >
            A simple SVG animation with drawing technique on page load with a
            quote"Light up the Darkness"
            <SVG />
          </p>
        </Col>

        <Col
          lg={12}
          className=''
          style={{ textAlign: 'center', fontSize: '50px' }}
        >
          More to come
        </Col>
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: '1.4rem',
            color: '#08a7ce'
          }}
        >
          &lt;/experimental&gt;
        </p>
      </Row>
    </Container>
  );
};

export default Experimental;
