import React from 'react';
import { Link } from 'react-router-dom';

const TopProjects = () => {
  return (
    <section>
      <div className='flex flex-row w-full justify-around'>
        <div className=' flex flex-col'>Project1</div>
        <div className='flex flex-col'>Project2</div>
      </div>

      <div className=' flex-row w-full text-center justify-center'>
        <Link to='/projects' className=' w-1/3 btn  btn-outline btn-primary  '>
          See more projects
        </Link>
      </div>
    </section>
  );
};

export default TopProjects;
