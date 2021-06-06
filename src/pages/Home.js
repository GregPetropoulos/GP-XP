import React from "react";
import Hero from "../components/Hero";
import SectionContainer from "../components/SectionContainer";
import Row from "../components/Row";
import Col from "../components/Col";
import Section from "../components/Section";

function Home() {
  return (
    <div>
      <Hero>
        <display>
          Hi my name is Greg Petropoulos and I create engaging websites and web
          applications to run across platforms and devices.
        </display>
      </Hero>

      <SectionContainer>
        <Section>
          <Row>
            <Col size="md-12">
              <h1>Projects</h1>
            </Col>
          </Row>
        </Section>

        <Section>
          <Row>
            <Col size="md-12">
              <h1>About</h1>
            </Col>
          </Row>
        </Section>

        <Section>
          <Row>
            <Col size="md-12">
              <h1>Contact</h1>
            </Col>
          </Row>
        </Section>
      </SectionContainer>
    </div>
  );
}

export default Home;
