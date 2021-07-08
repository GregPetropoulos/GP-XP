import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
// working on styling the hamburger 7.7.21
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 1250px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    transform: ${({ open }) => open ? 'rotate(180deg)':'rotate(0)'};
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#7f3331' : '#08a7ce'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all .2s linear;
    

    &:nth-child(1) {
      transform: ${({ open }) => open ?  ('translateX(0%) translateY(30px)'):'translateX(0%)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ?  ('rotate(126deg) translateX(-17px) translateY(-14px)'):'rotate(0)'};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? ('rotate(-120deg) translate(-9px)'): 'rotate(0)'};
    }
    
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div className='bar1'/>
        <div className='bar2'/>
        <div className='bar3' />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default Burger