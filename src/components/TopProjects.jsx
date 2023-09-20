import React from 'react';
import { Link } from 'react-router-dom';
import dressShopImage from '../assets/images/desktop/home-desktop.png';
// TODO MAKE DEMO
const TopProjects = () => {
  return (
    <section>
      <div className='flex flex-row justify-center w-full my-10'>
        <div className='card w-96 bg-base-100 shadow-xl image-full mx-10'>
          <figure>
            <img src={dressShopImage} alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-primary'>Ecommerce App</h2>
            <p className='text-primary'>
              E-commerce Fashion shop Created with React, Redux Toolkit, Bootstrap, React-Bootstrap
              CSS, Express, Node.js, Mongodb, and Mongoose.
            </p>
            <div className='card-actions align-center justify-center text-primary w-full'>
              <a
                href='https://github.com/GregPetropoulos/FashionShop'
                target='_blank'
                rel='noreferrer'
                alt='github ecommerce app link'
                className='btn btn-primary btn-sm'
              >
                Github
              </a>
              <a
                href='/'
                target='_blank'
                rel='noreferrer'
                alt='youtube live demo ecommerce app'
                className='btn btn-primary btn-sm'
              >
                Live Demo
              </a>
              <a
                href='https://fashionshopservice.onrender.com/'
                target='_blank'
                rel='noreferrer'
                alt='fashion ecommerce deployed link'
                className='btn btn-primary btn-sm'
              >
                Dress Shop
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=' flex-row w-1/2 text-center justify-center'>
        <Link to='/projects' className=' btn  btn-outline btn-primary btn-sm  '>
          See more projects
        </Link>
      </div>
    </section>
  );
};

export default TopProjects;
