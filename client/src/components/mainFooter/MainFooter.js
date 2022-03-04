import React, { Fragment } from 'react';

const MainFooter = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  return (
    <Fragment>
      <div className='footer-content'>
        <p>Created by Greg Petropoulos</p>
        <p>copyright 2021-{currentYear}</p>
      </div>
    </Fragment>
  );
};

export default MainFooter;
