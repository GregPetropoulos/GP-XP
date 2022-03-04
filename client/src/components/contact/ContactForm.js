import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Footer from '../footer/Footer';

const ContactForm = () => {
  //   const initialData = {
  //     name:'',
  //     email:'',
  //     textarea:''

  //   }
  //   // STATE
  // const [formInput, setFormInput] = useState(initialData)
  // console.log('form check', formInput)

  // const onChange = (e) => {
  //   setFormInput({ formInput, [e.target.name]: e.target.value });
  // };
  // const handleSubmit = () =>{
  //   fetch('')

  // }
  return (
    <>
      <Container className='contact-form-container'>
        <Row>
          <Col lg={12} className='intro-contact'>
            Feel free to send an email to{' '}
            <a
              href='mailto: gregpetropoulos@yahoo.com'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: '#d6b850' }}>
              gregpetropoulos@yahoo.com
            </a>
            <p>
              Don't hesitate to call or connect on{' '}
              <a
                href='http://bit.ly/Greg--Linkedin'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: '#d6b850' }}>
                Linkedin
              </a>{' '}
              and take a peak at my{' '}
              <a
                href='https://drive.google.com/file/d/1oOQa5YWcDl-4gf1AxJJkiAfwREmD4yr1/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: '#d6b850' }}>
                resume
              </a>{' '}
              to learn more
            </p>
            <p>Cell: 919.717.2680</p>
            <p>
              Email:{' '}
              <a
                href='mailto: gregpetropoulos@yahoo.com'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: '#08a7ce' }}>
                gregpetropoulos@yahoo.com
              </a>
            </p>
          </Col>
        </Row>

        {/* <Row>
          <p className="email-prompt">
            Or just a send a quick message below! :
          </p>
        </Row> */}

        {/* <Row>
          <Col className="form-container">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="nameForm.ControlInput1">
                <Form.Label>NAME</Form.Label>
                <Form.Control onChange= {onChange} name='name' value={name} type="text" placeholder="name" />
              </Form.Group>

              <Form.Group controlId="emailForm.ControlInput2">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control as='email' onChange= {onChange} name='email' value={email} type="text"  placeholder="name@example.com" />
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
            </Form> */}
        <Footer />
        {/* </Col>  */}
        {/* </Row>  */}
      </Container>
    </>
  );
};

export default ContactForm;
