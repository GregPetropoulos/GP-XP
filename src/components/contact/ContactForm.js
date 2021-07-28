
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import Container from "react-bootstrap/Container";
import React from "react";
import Form from "react-bootstrap/Form";
import Footer from '../footer/Footer'

const ContactForm = () => {
  return (
    <>
      <Container lg ={12} md={6} sm={12} className="contact-form-container">
        <Row>
          <p className="intro-contact">
            Feel free to send an email to{" "}
            <a
              href="mailto: gregpetropoulos@yahoo.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#08a7ce" }}
            >
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
          <Col className="form-container">
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
                type="submit"
                className="btn"
                style={{ color: "whitesmoke", backgroundColor: "#08a7ce" }}
              >
                Submit
              </button>
            </Form>
            <Footer/>
            </Col>
            </Row>
      </Container>
    </>
  );
};

export default ContactForm;
