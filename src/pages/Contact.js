import React from "react";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ContactForm from "../components/ContactForm";

function Contact() {

  return (
  <Container>
    <Row>
    <p>&lt;contact&gt;</p>
    </Row>
    <ContactForm/>
    <Row>
    <p>&lt;/contact&gt;</p>
    </Row>
    </Container>
  ); 
}

export default Contact;
