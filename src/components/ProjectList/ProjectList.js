import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./style.css";
// import Image from "react-bootstrap/Image";
// import { Link } from "react-router-dom";

// ADD ONS CAROUSEL AND BOX REVEALER

const ProjectList = ({ img, title, description, children }) => {
  return (
    <Container lg={12} md={true} sm={true} className="project-container col-10">
      <Row>
        <Col className="box-container">
          <Row >
            <Col sm={12} className="box">
              <h2 className="project-title">{title}</h2>
              <Col sm={12} className='image-col'>
                <img src={img} alt="" />
              </Col>
              <p className='app-description'>{description}</p>
              {children}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="buffer-row"></Row>
    </Container>
  );
};

export default ProjectList;
