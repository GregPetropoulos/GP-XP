import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./style.css";
import styled from 'styled-components';



// ADD ONS CAROUSEL AND BOX REVEALER

const ProjectList = ({ img, title, description, children }) => {
  const ProjectResponsive=styled.div`
  @media (max-width:585px){
    .app-description{
      display:none;
    }
    .project-children{
      margin:5px;
      padding:10px;
      display:flex;
      justify-content:center
      align-items:center;
    }
    .project-title{
      font-size:1.5rem;
    }
    .project-links{
      font-size:.8rem;
    }
    .img{
  border-radius:30px;

    }
    .images{
      border-radius:30px;
    
        }
}
  `
  return (
    
    <Container className="project-container col-10">
     <ProjectResponsive>
      <Row>
        <Col className="box-container">
          <Row >
            <Col  className="box">
              <h2 className="project-title">{title}</h2>
              <Row className='images'>
                <img src={img} alt="Linked project images of greg petropoulos project's page" />
                </Row>
              <Col>
              <p className='app-description'>{description}</p>
              </Col>
              <Row className ='project-children'>
                <Col>
              {children}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="buffer-row"></Row>
    </ProjectResponsive>
    </Container>
  );
};

export default ProjectList;
