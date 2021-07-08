import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 1250px) {
    flex-flow: column nowrap;
    background-color: #0e2124;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 5.5rem;
    padding-bottom: 2.5rem;
    transition: transform 0.3s ease-in-out;
    li {
    font-family: 'Trykker', serif;
    font-style: italic;
    color: whitesmoke;
    font-size:1.8rem;
    text-align:center;
    }
    .logo {
        padding: 15px 0;
      }
  }
`;


const RightNav = ({ open }) => {
  return (
      <>
    <Ul open={open}>
      <li>Home</li>
      <li>Projects</li>
      <li>About</li>
      <li>Contact</li>
      <li>Experimental</li>
      <li>Blog</li>

    </Ul>
    </>
  )
}

export default RightNav