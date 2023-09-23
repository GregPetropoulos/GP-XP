import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';

const Contact = () => {
  return (
    <>
      <Meta title='Greg Petropoulos react developer contact page' description='' />
      <section>
        <Link to='/contact' alt='Contact Link'>
          <p className='ml-3 mt-3 text-xl text-secondary-content sm:text-3xl'>&lt;contact&gt;</p>
        </Link>
        <ContactForm />
        <Link to='/contact' alt='Contact Link'>
          <p className='ml-3 text-xl text-secondary-content sm:text-3xl'>&lt;/contact&gt;</p>
        </Link>
      </section>
    </>
  );
};

export default Contact;
