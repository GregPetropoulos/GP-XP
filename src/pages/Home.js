import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Section from "../components/Section";


function Home() {
  return (
       <Container>
         <Section>
           <display>
          Hi my name is Greg Petropoulos and I create engaging websites and web
          applications to run across platforms and devices.
          </display>
      </Section>

        <Section>Projects</Section>
        <Row></Row>

        <Section>About</Section>
        <Row></Row>

        <Section>Contact</Section>
        <Row></Row>
      </Container> 
    
  );
}

export default Home;
