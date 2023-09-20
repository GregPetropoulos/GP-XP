import AboutSection from '../components/AboutSection';
import Meta from '../components/Meta';

const About = () => {
  return (
    <section>
       <Meta title='Greg Petropoulos react developer about page' description='About technology Greg Petropoulos is proficient in as a frontend developer'/>
      <p className='ml-3 mt-3 text-xl  text-secondary-content sm:text-3xl'>&lt;about&gt;</p>
      <AboutSection />
      <p className='ml-3 text-xl text-secondary-content sm:text-3xl'>&lt;/about&gt;</p>
    </section>
  );
};

export default About;
