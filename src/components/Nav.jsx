import React from 'react';
import { Link } from 'react-router-dom';
import GregPetropoulosResume from '../assets/resume/GregPetropoulosReactResume-9-4-23.pdf';

const Nav = () => {
  return (
    <nav className='navbar bg-base-300 justify-center fixed top-0 w-screen z-50 '>
      <div className=' w-full justify-between md:hidden'>
        <div className='dropdown md:hidden'>
          <label tabIndex='0' className='btn btn-ghost swap swap-rotate '>
            <input type='checkbox' />

            <svg
              className='swap-off fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'
            >
              <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
            </svg>

            <svg
              className='swap-on fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'
            >
              <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
            </svg>
          </label>
          <ul
            tabIndex='0'
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to='/' alt='Home Link'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/projects' alt='Projects Link'>
                Projects
              </Link>
            </li>
            <li>
              <Link to='/about' alt='About Link'>
                About
              </Link>
            </li>
            <li>
              <Link to='/blog' alt='Blog Link'>
                Blog
              </Link>
            </li>
            <li>
              <Link to='/contact' alt='Contact Link'>
                Contact
              </Link>
            </li>
            <li>
              <a href={GregPetropoulosResume} download>
                Resume
              </a>
            </li>
          </ul>
        </div>

        <div className='md:hidden'>
          <a
            className='btn normal-case font-bold sm:text-2xl hover:animate-bounce md:m-0'
            href='mailto: gregpetropoulos@yahoo.com'
            target='_blank'
            rel='noopener noreferrer'
            alt='email link'
          >
            Greg Petropoulos
          </a>
        </div>
      </div>
      <div className=' hidden md:flex'>
        <ul className=' menu menu-horizontal p-3 text-2xl mr-16 md:m-0'>
          <li>
            <Link to='/' alt='Home Link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/projects' alt='Projects Link'>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/about' alt='About Link'>
              About
            </Link>
          </li>
          <li>
            <Link to='/blog' alt='Blog Link'>
              Blog
            </Link>
          </li>
          <li>
            <Link to='/contact' alt='Contact Link'>
              Contact
            </Link>
          </li>
          <li>
            <a href={GregPetropoulosResume} download alt='Greg Petropoulos resume pdf download'>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
