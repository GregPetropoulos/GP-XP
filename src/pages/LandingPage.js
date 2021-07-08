import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from 'styled-components';

// import "./style.css";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
const StyledLandingPage=styled.div`
background-color:#0e2124;
height:100vh;
color:#d6b850;
`;



const LandingPage = () => {

    return(
           <StyledLandingPage>
               <div>
        {/* <Container className='cont-land'> */}
                   <Row>
                       <Col>
                       
                       </Col>
                   </Row>
        {/* </Container> */}
                </div>
            </StyledLandingPage>
        

    );

};



export default LandingPage;