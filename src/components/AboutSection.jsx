import GregPetropoulosResume from '../assets/resume/GregPetropoulosReactResume-9-4-23.pdf';

const AboutSection = () => {
  const feTech = [
    { name: 'JavaScript', type: 'frontend' },
    { name: 'React Native', type: 'frontend' },
    { name: 'React', type: 'frontend' },
    { name: 'TypeScript', type: 'frontend' },
    { name: 'Redux/RTK', type: 'frontend' },
    { name: 'ContextAPI', type: 'frontend' },
    { name: 'Gatsby', type: 'frontend' },
    { name: 'HTML', type: 'frontend' },
    { name: 'CSS', type: 'frontend' },
    { name: 'SCSS', type: 'frontend' },
    { name: 'Tailwind', type: 'frontend' },
    { name: 'Bootstrap', type: 'frontend' },
    { name: 'React-Bootstrap', type: 'frontend' },
    { name: 'DaisyUI', type: 'frontend' },
    { name: 'Git', type: 'frontend' },
  ];
  const beTech = [
    { name: 'Node', type: 'backend' },
    { name: 'Express', type: 'backend' },
    { name: 'MongoDB', type: 'backend' },
    { name: 'Mongoose', type: 'backend' },
    { name: 'Contentful', type: 'backend' },
    { name: 'Strapi', type: 'backend' },
    { name: 'Umbraco', type: 'backend' },
    { name: 'Git', type: 'backend' },
    { name: 'REST API', type: 'backend' },
  ];
  const testTech = [
    { name: 'Cypress', type: 'frontend' },
    { name: 'Storybook', type: 'frontend' },
    { name: 'Postman', type: 'backend' },
  ];
  const renderTech = (techArr, title) => {
    return (
      <>
        <div className='flex flex-col w-full align-center mx-3'>
          <h4 className='text-lg font-bold'>{title}</h4>
          {techArr.map((item, idx) => (
            <div key={idx} className='flex flex-row  my-2 bg-accent p-1 rounded  text-primary'>
              {item.name}
            </div>
          ))}
        </div>
      </>
    );
  };
  return (
    <>
      <div className='flex flex-col items-center w-full '>
        <div className='flex flex-row justify-center w-1/2'>
          <p className='mb-3'>
            I enjoy learning new things and see myself as a pragmatic person. I find it rewarding to
            utilize my strengths in frontend web development to reach a common goal. Let's bring
            ideas to life! Click the link to learn more...
            <a href={GregPetropoulosResume} download='Greg-Petropoulos-React-Dev' className='ml-1'>
              {' '}
              <button className=' mt-1 btn btn-xs btn-outline btn-primary'>Resume</button>
            </a>
          </p>
        </div>
        <h3 className='text-xl text-primary text-center my-4'>Technologies</h3>
        <div className='flex flex-row justify-between flex-wrap  sm:w-1/2 sm:flex-nowrap sm:text-left'>
          {renderTech(feTech, 'Frontend')}
          {renderTech(beTech, 'Backend')}
          {renderTech(testTech, 'Test')}
        </div>
      </div>
    </>
  );
};
export default AboutSection;
