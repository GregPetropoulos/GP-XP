import React from "react";
import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Section from "../components/Section";

// function Home() {
//   return<h1>Hello</h1>
// }
function Home() {
  return (
    <div>
      <Hero>
        <h2>
          Hi my name is Greg Petropoulos and I create engaging websites and web
          applications to run across platforms and devices.
        </h2>
      </Hero>
      {/* <Container style={{ marginTop: 30 }}>
        <Row></Row>

        <Section>Projects</Section>
        <Row></Row>

        <Section>About</Section>
        <Row></Row>

        <Section>Contact</Section>
        <Row></Row>
      </Container> */}
    </div>
  );
}

export default Home;
