// import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import React from "react";
import Form from "react-bootstrap/Form";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactForm = () => {
  return (
    <>
      <Container className="contact-form-container">
        <Row>
          <p className="intro-contact">
            Feel free to send an email to{" "}
            <a href= 'mailto: gregpetropoulos@yahoo.com' target="_blank" rel="noopener noreferrer" style={{ color: "#08a7ce" }}>
              contact@gregpetropoulos.com
            </a>
          </p>
        </Row>

        <Row>
          <p className="email-prompt">
            Or just a send a quick message below! :
          </p>
        </Row>

        <Row>
          <Col md={8} className="form-container">
            <Form>
              <Form.Group controlId="nameForm.ControlInput1">
                <Form.Label>NAME</Form.Label>
                <Form.Control type="name" placeholder="name" />
              </Form.Group>

              <Form.Group controlId="emailForm.ControlInput2">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

              <Form.Group controlId="messageForm.ControlTextarea1">
                <Form.Label>MESSAGE</Form.Label>
                <Form.Control as="textarea" rows={8} />
              </Form.Group>

              <button
                className="btn"
                style={{ color: "whitesmoke", backgroundColor: "#08a7ce" }}
              >
                Submit
              </button>
            </Form>
            <Row className="icon-row">
              <Col className="icon-col">
                <a
                  href="https://github.com/GregPetropoulos"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a
                  href="https://linkedin.com/in/greg-petropoulos-b186b954"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC59RJzqORuQTPjePJVml-pw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a
                  href="https://twitter.com/GregoriosPetro1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </Col>
            </Row>
          </Col>
  
        </Row>
          <Row>
            <Col md={8} sm={4} className="contact-footer d-flex justify-content-center text-center text-wrap">
          gregpetropoulos@yahoo.com
          </Col>
        </Row>
        {/* <Row>
          <Col md={6} className="contact-footer text-center text-wrap">
          gregpetropoulos@yahoo.com
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default ContactForm;
