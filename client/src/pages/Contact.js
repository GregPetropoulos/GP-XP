import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <Container>
        <p className='page-title'
          style={{
            fontSize: '1.4rem',
            color: '#08a7ce'
          }}
        >
          &lt;contact&gt;
        </p>
      <ContactForm />
        <p className='page-title'
          style={{
            fontSize: '1.4rem',
            color: '#08a7ce'
          }}
        >
          &lt;/contact&gt;
        </p>
    </Container>
  );
}

export default Contact;
