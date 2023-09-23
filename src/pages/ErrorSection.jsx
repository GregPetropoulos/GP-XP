import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';

const ErrorSection = () => {
  return (
    <>
      <Meta />
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>This page doesn't exist</h1>
        <h1>
          <Link to='/' style={{ textAlign: 'center' }} alt='Go Back To Home Page'>
            &#128072; Back Home
          </Link>
        </h1>
      </div>
    </>
  );
};

export default ErrorSection;
