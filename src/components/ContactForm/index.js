import { useForm } from 'react-hook-form';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import React from 'react';

import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// import React, { Component } from "react";

const ContactForm = (props) => {
    const { register, errors, handleSubmit,reset }= useForm();

    const toastifySuccess = () => {
      toast('Form sent!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: 'submit-feedback success',
        toastId: 'notifyToast'
      });
    };

    const onSubmit = async (data) => {
      // Send form email
      try {
     const templateParams= {
       name: data.name,
       email: data.email,
       subject: data.subject,
       message: data.message
        // console.log('Name:',data.name);
        // console.log('Email:',data.email);
        // console.log('Subject:',data.subject);
        // console.log('Message:',data.message);
     };
     await emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_USER_ID
     );
     reset();
     toastifySuccess();
      } catch(e) {
        console.log(e);
      }
  };

  return (
    <div className='ContactForm'>
      <Container md>
        <Row>
          <Col md={12} className ='text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form name and email */}
                <Row className='row formRow'>
                  <Col md ={6}>
                    <input
                      type='text'
                      name='name'
                      ref={register({
                          required: {value: true, message: 'Please enter your name'},
                          maxLength: {
                              value: 30,
                              message: 'Please 30 characters or less'
                          }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </Col>
                  <Col md={6}>
                    <input
                      type='email'
                      name='email'
                      ref={register({
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (<span className ='errorMessage'>Please enter a valid email</span>
                    )}
                 </Col>
                 </Row>

                {/* Row 2 of form subject message */}
                <Row className='row formRow'>
                  <Col md={12}>
                    <input
                      type='text'
                      name='subject'
                      ref={register({
                          required: {value:true, message: 'Please enter subject'},
                          maxLength: {
                              value: 75,
                              message: 'Subject cannot exceed 75 characters'
                          }
                          })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                        <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </Col>
                </Row>

                {/* Row 3 of form */}
                <Row className='row formRow'>
                  <Col md={12} className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      ref={register ({
                          required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='error message'>Please enter a message</span>}
                  </Col>
                </Row>
                <button className='submit-btn' type='submit'>
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;

// EXAMPLE BELOW--------
// import { useForm } from 'react-hook-form';
// import emailjs from 'emailjs-com';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';

// const ContactForm = () => {
//   const { register, errors, handleSubmit, reset } = useForm();

//   const toastifySuccess = () => {
//     toast('Form sent!', {
//       position: 'bottom-right',
//       autoClose: 5000,
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: false,
//       className: 'submit-feedback success',
//       toastId: 'notifyToast'
//     });
//   };

//   const onSubmit = async (data) => {
//     // Send form email
//     try {
//       const templateParams = {
//         name: data.name,
//         email: data.email,
//         subject: data.subject,
//         message: data.message
//       };

//       await emailjs.send(
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID,
//         templateParams,
//         process.env.REACT_APP_USER_ID
//       );

//       reset();
//       toastifySuccess();
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div className='ContactForm'>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-12 text-center'>
//             <div className='contactForm'>
//               <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
//                 {/* Row 1 of form */}
//                 <div className='row formRow'>
//                   <div className='col-6'>
//                     <input
//                       type='text'
//                       name='name'
//                       ref={register({
//                         required: { value: true, message: 'Please enter your name' },
//                         maxLength: {
//                           value: 30,
//                           message: 'Please use 30 characters or less'
//                         }
//                       })}
//                       className='form-control formInput'
//                       placeholder='Name'
//                     ></input>
//                     {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
//                   </div>
//                   <div className='col-6'>
//                     <input
//                       type='email'
//                       name='email'
//                       ref={register({
//                         required: true,
//                         pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//                       })}
//                       className='form-control formInput'
//                       placeholder='Email address'
//                     ></input>
//                     {errors.email && (
//                       <span className='errorMessage'>Please enter a valid email address</span>
//                     )}
//                   </div>
//                 </div>
//                 {/* Row 2 of form */}
//                 <div className='row formRow'>
//                   <div className='col'>
//                     <input
//                       type='text'
//                       name='subject'
//                       ref={register({
//                         required: { value: true, message: 'Please enter a subject' },
//                         maxLength: {
//                           value: 75,
//                           message: 'Subject cannot exceed 75 characters'
//                         }
//                       })}
//                       className='form-control formInput'
//                       placeholder='Subject'
//                     ></input>
//                     {errors.subject && (
//                       <span className='errorMessage'>{errors.subject.message}</span>
//                     )}
//                   </div>
//                 </div>
//                 {/* Row 3 of form */}
//                 <div className='row formRow'>
//                   <div className='col'>
//                     <textarea
//                       rows={3}
//                       name='message'
//                       ref={register({
//                         required: true
//                       })}
//                       className='form-control formInput'
//                       placeholder='Message'
//                     ></textarea>
//                     {errors.message && <span className='errorMessage'>Please enter a message</span>}
//                   </div>
//                 </div>
//                 <button className='submit-btn' type='submit'>
//                   Submit
//                 </button>
//               </form>
//             </div>
//             <ToastContainer />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;