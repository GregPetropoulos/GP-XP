import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks/MenuHook';
import Burger from './Burger';
import RightNav from './RightNav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  
  const node = useRef();
  
  useOnClickOutside(node, () => setOpen(false));

  // Thi onClick closes the nav menu after an item is clicked 
  const onClick =()=> setOpen(false)
  return (
    <>
    <nav>
      <div ref={node}>
    <Row>
    <Col className="logo">
      
      &lt; G/P &gt;
      <Burger open={open} setOpen={setOpen} className='burger'/>
      </Col>
    </Row>
      <RightNav open={open} setOpen={setOpen} onClick={onClick}/>
      </div>
    </nav>
  </>
  )
}

export default NavBar;
