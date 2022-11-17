// *USED FROMSPREE ON THIS FORM

// import {useNavigate} from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';
import GregPetropoulosResume from '../assets/resume/Resume_10.20.22.docx';

const ContactForm = () => {
  // const navigate=useNavigate()

  const [state, handleSubmit] = useForm('mvolrjgl');

  if (state.succeeded) {

    // return navigate('/')
    return <p className='text-center'>Thank you for sending a message! I will reach out to you shortly</p>;
  }

  return (
    <div className='sm:flex sm:flex-row sm: sm:justify-center sm:w-full sm:text-xl'>
      <form className=' sm:w-2/3 m-6 form-control ' onSubmit={handleSubmit}>
        <label htmlFor='email' className='label'>
          Email Address
        </label>
        <input
          className='input input-accent text-success'
          id='email'
          type='email'
          name='email'
          placeholder='name@gmail.com'
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <label htmlFor='message' className='label'>
          Message
        </label>
        <textarea
          className='textarea textarea-accent text-success'
          id='message'
          name='message'
          placeholder='Send me a message'
          rows='7'
        />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
        <button
          className='mt-3 btn btn-outline btn-xs w-1/3 transition-all  sm:btn-lg sm:hover:scale-75'
          type='submit'
          disabled={state.submitting}>
          Submit
        </button>
        <a
          href={GregPetropoulosResume}
          download='Greg-Petropoulos-React-Dev'
          className='mt-3'>
          {' '}
          <button className=' w-1/3 btn btn-xs btn-outline btn-primary sm:btn-lg '>
            Resume
          </button>
        </a>
      </form>
    </div>
  );
};

export default ContactForm;