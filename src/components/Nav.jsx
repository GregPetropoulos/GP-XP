import React from 'react';
import { Link } from 'react-router-dom';
import GregPetropoulosResume from '../assets/resume/React Full Stack--Greg Petropoulos_Resume_6.8.22.docx';

const Nav = () => {
  return (
    <nav className='navbar bg-base-300 justify-center'>
      <div className=' w-full justify-between md:hidden'>
        <div className='dropdown md:hidden'>
          <label tabIndex='0' className='btn btn-ghost swap swap-rotate '>
            {/* <!-- this hidden checkbox controls the state --> */}
            {/* <!-- this hidden checkbox also a bug in safari shows up --> */}
            <input type='checkbox' />

            {/* <!-- hamburger icon --> */}
            <svg
              className='swap-off fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'>
              <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
            </svg>

            {/* <!-- close icon --> */}
            <svg
              className='swap-on fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'>
              <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
            </svg>
          </label>
          <ul
            tabIndex='0'
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
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
            rel='noopener noreferrer'>
            <button>Greg Petropoulos</button>
          </a>
        </div>
      </div>
      {/* <div className='navbar-center hidden md:flex'> */}
      <div className=' hidden md:flex'>
        <ul className=' menu menu-horizontal p-3 text-2xl mr-16 md:m-0'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <a href={GregPetropoulosResume} download>
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* <div className='navbar-end ml-16'> */}
    </nav>
  );
};

export default Nav;
