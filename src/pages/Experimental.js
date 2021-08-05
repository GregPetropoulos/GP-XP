import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import SVG from '../components/SVG';


const Experimental = () => {
  return (
    <Container>
      <h2 style={{color:'#08a7ce'}}>Animation Experiment</h2>
<Row>
      <Col lg={12}>
        <p className ='' style={{ border:'5px solid #d6b850', fontSize: '1.3rem', color:'#08a7ce', padding:'2%'}}>
          A simple SVG animation with drawing technique on page load with a quote"Light up the Darkness"
      <SVG/>
        </p>
</Col>

      <Col lg={12} className='' style={{ textAlign: 'center', fontSize: '50px' }}>
        More to come
      </Col>
    </Row>
    </Container>
  );
};

export default Experimental;
