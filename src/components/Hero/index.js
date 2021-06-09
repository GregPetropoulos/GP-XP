import React from "react";
// import Col from "../Col";
// import Row from "../Row";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
// import "./style.css";

function Hero(props) {
  return (
    <Container fluid>
    <Row>
      <Col md= {12}>
        <div className="hero text-center d-flex align-items-center justify-content-center" style={{ color: "whitesmoke", height:'100vh', align:'center' }}>
        {props.children}
        </div>
      </Col>
    </Row>
    </Container>
  );
}

export default Hero;

