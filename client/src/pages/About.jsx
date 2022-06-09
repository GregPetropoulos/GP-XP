import AboutSection from '../components/AboutSection';

const About = () => {
  return (
    <section>
      <p className='ml-3 mt-3 text-xl  text-secondary-content sm:text-3xl'>&lt;about&gt;</p>
      <AboutSection />
      <p className='ml-3 text-xl text-secondary-content sm:text-3xl'>&lt;/about&gt;</p>
    </section>
  );
};

export default About;
