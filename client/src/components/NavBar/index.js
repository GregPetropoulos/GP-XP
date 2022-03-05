import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks/MenuHook';
import Burger from './Burger';
import RightNav from './RightNav';
// import styled from 'styled-components';



const NavBar = () => {
  const [open, setOpen] = useState(false);

  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));
  // Thi onClick closes the nav menu after an item is clicked
  const onClick = () => setOpen(false);
  return (
    <>
      <nav>

        <div className='logo'>&lt; G/P &gt;</div>
        <div className='logo2'> &#91;&#123;G : P &#125;&#93;</div>
        

        <div className='spacer-nav'></div>
        <div className='burger-menu-container' ref={node}>
          <Burger open={open} setOpen={setOpen} className='burger' />
          <RightNav open={open} setOpen={setOpen} onClick={onClick} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
