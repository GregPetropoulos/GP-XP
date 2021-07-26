import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks/MenuHook';
import Burger from './Burger';
import RightNav from './RightNav';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  
  const node = useRef();
  
  useOnClickOutside(node, () => setOpen(false));

  // Thi onClick closes the nav menu after an item is clicked 
  const onClick =()=> setOpen(false)
  return (
    <>
    <nav>
    <div className="logo">
      &lt; G/P &gt;
      </div>
      <div ref={node}>
      <RightNav open={open} setOpen={setOpen} onClick={onClick}/>
      <Burger open={open} setOpen={setOpen} className='burger'/>
      </div>
      {/* <div className="logo">
      &lt; G/P &gt;
      </div> */}

    </nav>
  </>
  )
}

export default NavBar;
