// import React, {useState} from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Ul } from './StyledUl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RightNav = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  return (
    <>
      <Ul open={open} aria-hidden={!isHidden} {...props}>
        <li>
          <Link to='/home' tabIndex={tabIndex}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/projects' tabIndex={tabIndex}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='/about' tabIndex={tabIndex}>
            About
          </Link>
        </li>
        <li>
          <Link to='/contact' tabIndex={tabIndex}>
            Contact
          </Link>
        </li>
        <li>
          <Link to='/experimental' tabIndex={tabIndex}>
            Experimental
          </Link>
        </li>
        <li>
          <Link to='/blog' tabIndex={tabIndex}>
            Blog
          </Link>
        </li>
      </Ul>
    </>
  );
};

RightNav.propTypes = {
  open: PropTypes.bool.isRequired
};

export default RightNav;
