import React from 'react';
import { Link } from 'react-router-dom';

const ErrorSection = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>This page doesn't exist</h1>
      <h1>
        <Link to='/' style={{ textAlign: 'center' }}>
          &#128072; Back Home
        </Link>
      </h1>
    </div>
  );
};

export default ErrorSection;
