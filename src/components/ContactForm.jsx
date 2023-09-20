// *USED FROMSPREE ON THIS FORM

// import {useNavigate} from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';
import GregPetropoulosResume from '../assets/resume/GregPetropoulosReactResume-9-4-23.pdf';

const ContactForm = () => {
  // const navigate=useNavigate()

  const [state, handleSubmit] = useForm('mvolrjgl');

  if (state.succeeded) {
    // return navigate('/')
    return (
      <p className='text-center'>
        Thank you for sending a message! I will reach out to you shortly
      </p>
    );
  }

  return (
    <div className='flex-wrap  sm:flex sm:flex-row sm: sm:justify-center sm:w-full sm:text-xl'>
      <form className=' sm:w-2/3 m-6 form-control ' onSubmit={handleSubmit}>
        <label htmlFor='email' className='label'>
          Email Address
        </label>
        <input
          className='input input-accent text-primary'
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
          className='textarea textarea-accent text-primary'
          id='message'
          name='message'
          placeholder='Send me a message'
          rows='7'
        />
        <ValidationError prefix='Message' field='message' errors={state.errors} />
        <button
          className='mt-3 btn btn-outline btn-xs w-1/3 transition-all  sm:btn-lg sm:hover:scale-75'
          type='submit'
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
      <div className='my-3 flex-row w-full text-center justify-center'>
        <a
          href={GregPetropoulosResume}
          download='Greg-Petropoulos-React-Dev'
          className='w-1/2 btn btn-outline btn-primary btn-xs text-xs sm:btn-lg '
        >
          RESUME
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
