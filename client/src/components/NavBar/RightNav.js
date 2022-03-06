import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Ul } from './StyledUl';

const RightNav = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  return (
    <>
      <Ul open={open} aria-hidden={!isHidden} {...props}>
        <li>
          <Link to='/' className= 'menu-links' tabIndex={tabIndex}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/projects' className= 'menu-links'  tabIndex={tabIndex}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='/about' className= 'menu-links' tabIndex={tabIndex}>
            About
          </Link>
        </li>
        <li>
          <Link to='/contact' className= 'menu-links' tabIndex={tabIndex}>
            Contact
          </Link>
        </li>
        <li>
          <Link to='/experimental' className= 'menu-links' tabIndex={tabIndex}>
            Experimental
          </Link>
        </li>
        <li>
          <Link to='/blog' className= 'menu-links' tabIndex={tabIndex}>
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
