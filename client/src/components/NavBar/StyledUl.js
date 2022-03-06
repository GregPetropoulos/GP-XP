import styled from 'styled-components';

export const Ul = styled.ul`
 list-style-type: none;
   display: flex;
   justify-content:center;
   flex-flow: row nowrap;
  font-size:3rem;
  text-align: center;

  li {
    padding: 18px 10px;
  }
  @media (max-width: 2560px) {
    justify-content:center;
    flex-flow: column nowrap;
    background-color: #464646;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width:100vw;
    z-index: 10; 
    

    text-decoration:none;
    padding-top: 2rem;
    padding-bottom: 2rem;
    transition: transform 0.6s ease-in-out;
    li>a {
    font-size:2.8rem;
    text-align:center;
    }
    
    @media (max-width:768px){
    
  }
`