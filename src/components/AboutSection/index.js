import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./style.css"


const AboutSection = () => {
  return (
    <Container className='about-container'>
      <Row>
        <p>&lt;about&gt;</p>
      </Row>
      <Row>
        <Col md={8}>
          <p>
            I am a Full Stack Web Developer with a background in geologic
            sciences and I am always eager to learn and collaborate. As a sleuth
            at heart, I find discovery in many aspects of life rewarding. Web
            development is exciting and provides an opportunity to create value
            and utilize my strengths in ground-truthing an expected outcome.
          </p>
        </Col>
      </Row>
      {/* <Row className="d-flex justify-content-space-around"style={{backgroundColor:"rgb(102, 102, 102)"}}>
                <Col className="text-center ">
          <i class="devicon-mongodb-plain colored"></i>
          <i class="devicon-express-original colored"></i>
          <i class="devicon-react-plain colored"></i>
          <i class="devicon-nodejs-plain colored"></i>
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-html5-plain colored"></i>
          <i class="devicon-css3-plain colored"></i>
          <i class="devicon-bootstrap-plain colored"></i>
          <i class="devicon-jquery-plain colored"></i>
          </Col>
          </Row> */}
      <Row>
        <Col md={6}>
          <p>
            I am well versed in MongoDB, Express, React, Node, M.E.R.N. stack
            and foundational Javascript, jQuery, HTML5 CSS3.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <p>
            Over the last year I have created several web applications with the
            key methods in mind for rich user experiences.
          </p>
          <button>
            <Link to="/projects">See project link</Link>
          </button>
        </Col>
        <Row>
          <Col md={2} sm={2}></Col>
          <Col md={5}>
            <ul>
              <li>
                Pragmatic design and development of responsive web applications.
              </li>
              <li>
                <p>
                  Stylistic and functional UI/UX, use of multiple API’s, and
                  third party integrations &amp; database.
                </p>
              </li>
              <li>
                <p>Outcome oriented and project management.</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Row>
      <p>
        Outside of web development I enjoy spending time with my family, working
        out, and exploring old treasure maps.
      </p>
      <button>
      <Link>Resume</Link>
      </button>

      <p>&lt;/about&gt;</p>
    </Container>
  );
};
export default AboutSection;
