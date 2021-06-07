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
      <Col md >
        <div className="hero text-center" style={{ color: "whitesmoke" }}>
        {props.children}
        </div>
      </Col>
    </Row>
    </Container>
  );
}

export default Hero;

