import React from "react";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import "./style.css";


const ProjectList = ({img,title, description, children}) => {

  return (
    <Container fluid>
    <Row>
      <Col md={6} className='box' style={{backgroundColor:"yellow", color:"red"}}>
        <img src={img} alt=""/>
        <h1>{title}</h1>
        <h3>{description}</h3>
        {children}
      </Col>
    </Row>
    </Container>
  );
}

export default ProjectList;

