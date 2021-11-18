import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
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
          &lt;contact&gt;
        </p>
      </Row>
      <ContactForm />
      <Row>
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: '1.4rem',
            color: '#08a7ce'
          }}
        >
          &lt;/contact&gt;
        </p>
      </Row>
    </Container>
  );
}

export default Contact;
