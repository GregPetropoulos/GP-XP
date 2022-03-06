// import React from 'react';
// import { Row } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Experimental = () => {
  return (
    <Container>
      <p
        className='page-title'
        style={{
          fontSize: '1.4rem',
          color: '#08a7ce'
        }}>
        &lt;experimental&gt;
      </p>
      <h3 style={{ textAlign: 'center' }}> Actively Pursuing</h3>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <li>Creative Coding</li>
        <li>Animation</li>
        <li>Predictive</li>
        <li>Sonic</li>
        <li>Blockchain/Web3</li>
      </ul>
      <p
        className='page-title'
        style={{
          fontSize: '1.4rem',
          color: '#08a7ce'
        }}>
        &lt;/experimental&gt;
      </p>
    </Container>
  );
};

export default Experimental;
