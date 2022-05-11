// *USED FROMSPREE ON THIS FORM

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import GregPetropoulosResume from '../assets/resume/React_Full_Stack_Greg_Petropoulos_Resume_5.10.pdf';
import Footer from './Footer';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mvolrjgl');
  if (state.succeeded) {
    return <p>Thanks for sending a message!</p>;
  }

  return (
    <>
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
        and download my{' '}
        <a href={GregPetropoulosResume} download style={{ color: '#d6b850' }}>
          {' '}
          resume{' '}
        </a>
        to learn more or click this{' '}
        <a
          href='https://drive.google.com/file/d/1oOQa5YWcDl-4gf1AxJJkiAfwREmD4yr1/view?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: '#d6b850' }}>
          resume link
        </a>{' '}
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
      {/* Email submission */}
      <form className='contact-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email Address</label>
        <input
          className='contact-input'
          id='email'
          type='email'
          name='email'
          placeholder='name@gmail.com'
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <label htmlFor='message'>Message</label>
        <textarea className='contact-textarea' id='message' name='message' />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
        <button
          className='contact-button'
          type='submit'
          disabled={state.submitting}>
          Submit
        </button>
      </form>
      <Footer />
    </>
  );
};

export default ContactForm;
