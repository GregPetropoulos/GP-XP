import { Fragment } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Fragment>
      <p
        className='page-title'
        style={{
          fontSize: '1.4rem',
          color: '#08a7ce'
        }}>
        &lt;contact&gt;
      </p>
      <ContactForm />
      <p
        className='page-title'
        style={{
          fontSize: '1.4rem',
          color: '#08a7ce'
        }}>
        &lt;/contact&gt;
      </p>
    </Fragment>
  );
};

export default Contact;
