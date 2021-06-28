import React from "react";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import "./style.css";


function HomeSection({img}) {
  return (
    <Container className= 'hero-container'>
      <a href ='https://github.com/GregPetropoulos' target='_blank' rel="noreferrer"><img className ='profile-image' src={img} alt="" /></a>
    <Row>
      <Col className= "hero" md= {12}>
      <h2> Hi my name is Greg Petropoulos and I create engaging websites and web
        applications to run across platforms and devices.</h2>
      </Col>
    </Row>
    </Container>
  );
}

export default HomeSection;

