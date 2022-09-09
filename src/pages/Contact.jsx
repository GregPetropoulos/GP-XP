
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section>
      <p className='ml-3 mt-3 text-xl text-secondary-content sm:text-3xl'>&lt;contact&gt;</p>
      <ContactForm />
      <p className='ml-3 text-xl text-secondary-content sm:text-3xl'>&lt;/contact&gt;</p>
    </section>
  );
};

export default Contact;
