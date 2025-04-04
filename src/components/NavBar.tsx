import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { NAV_LINKS } from '../constants/constants';

const NavBar = () => {
  const [theme, setTheme] = useState(localStorage?.getItem('theme') ?? 'dim');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme') ?? '';
    document.querySelector('html')?.setAttribute('data-theme', localTheme);
  }, [theme]);
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme('cyberpunk');
    } else {
      setTheme('dim');
    }
  };

  return (
    <div className='navbar bg-base-100 shadow-sm'>
      {/* MOBILE */}
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow'>
            {NAV_LINKS.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: true }}
                  activeProps={{
                    className: 'font-bold text-primary'
                  }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost text-xl'>
          Greg Petropoulos
        </Link>
      </div>
      {/* DESKTOP */}
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          {NAV_LINKS.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.to}
                className='text-xl'
                activeOptions={{ exact: true }}
                activeProps={{
                  className: 'font-bold text-primary'
                }}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='sm:navbar-end hidden'>
        <label className='swap swap-rotate'>
          {/* this hidden checkbox controls the state */}
          <input
            type='checkbox'
            onChange={handleToggle}
            checked={theme === 'cyberpunk' ? true : false}
          />

          {/* Nuclear icon */}

          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='swap-off h-10 w-10 fill-current'
            version='1.1'
            id='Layer_1'
            viewBox='0 0 490.667 490.667'>
            <g>
              <g>
                <g>
                  <path d='M202.027,197.547c1.344,2.752,3.819,4.779,6.763,5.568c2.923,0.832,6.101,0.299,8.661-1.365     c16.768-11.051,39.019-11.051,55.787,0c1.771,1.152,3.797,1.749,5.867,1.749c0.917,0,1.856-0.128,2.795-0.384     c2.944-0.789,5.419-2.816,6.763-5.568l48.725-98.411c2.517-5.077,0.597-11.264-4.352-14.037     c-53.461-29.867-121.92-29.867-175.381,0c-4.949,2.773-6.869,8.96-4.352,14.037L202.027,197.547z M313.6,99.072l-39.147,79.104     c-9.173-4.053-19.051-6.187-29.12-6.187s-19.947,2.112-29.12,6.187l-39.147-79.104C219.563,78.827,271.104,78.827,313.6,99.072z' />
                  <path d='M416.619,237.995l-108.757-6.592c-3.008-0.32-5.995,0.917-8.149,3.093c-2.155,2.133-3.285,5.099-3.136,8.128     c0.555,10.155-1.792,20.096-6.741,28.779c-4.949,8.619-12.288,15.616-21.227,20.224c-2.688,1.365-4.672,3.84-5.44,6.741     s-0.277,6.037,1.387,8.555l60.032,91.84c2.048,3.136,5.44,4.843,8.939,4.843c1.899,0,3.797-0.491,5.525-1.557     c26.155-15.915,48.085-38.464,63.381-65.216c15.275-26.752,23.659-57.195,24.213-88     C426.752,243.115,422.336,238.357,416.619,237.995z M383.936,326.251c-11.797,20.608-28.032,38.4-47.317,51.925l-48.235-73.771     c8.128-6.016,14.912-13.611,19.968-22.421c5.056-8.811,8.171-18.539,9.237-28.608l87.232,5.269     C402.901,282.368,395.755,305.536,383.936,326.251z' />
                  <path d='M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333     S380.608,0,245.333,0z M245.333,469.333c-123.52,0-224-100.48-224-224s100.48-224,224-224s224,100.48,224,224     S368.853,469.333,245.333,469.333z' />
                  <path d='M277.333,245.333c0-17.749-14.357-32.213-32-32.213s-32,14.464-32,32.213s14.357,32.213,32,32.213     S277.333,263.083,277.333,245.333z M245.333,256.213c-5.888,0-10.667-4.885-10.667-10.88s4.779-10.88,10.667-10.88     S256,239.339,256,245.333S251.221,256.213,245.333,256.213z' />
                  <path d='M222.059,291.627c-8.96-4.608-16.299-11.605-21.227-20.224c-4.949-8.704-7.275-18.624-6.741-28.779     c0.171-3.029-0.96-5.995-3.136-8.128c-2.155-2.176-5.163-3.435-8.149-3.093l-108.757,6.592     c-5.717,0.363-10.133,5.12-10.027,10.837c0.555,30.805,8.939,61.248,24.213,88c15.296,26.752,37.205,49.301,63.381,65.216     c1.728,1.067,3.648,1.557,5.525,1.557c3.477,0,6.891-1.707,8.939-4.843l60.032-91.84c1.664-2.517,2.155-5.653,1.387-8.555     C226.731,295.467,224.747,292.992,222.059,291.627z M154.048,378.176c-19.307-13.525-35.52-31.317-47.317-51.925     c-11.819-20.693-18.965-43.883-20.885-67.605l87.232-5.269c1.088,10.069,4.203,19.797,9.237,28.608     c5.035,8.811,11.84,16.427,19.968,22.421L154.048,378.176z' />
                </g>
              </g>
            </g>
          </svg>
          {/* moon icon */}
          <svg
            className='swap-on h-10 w-10 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
