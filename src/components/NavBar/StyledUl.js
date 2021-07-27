import styled from 'styled-components';


// transition: transform 0.3s ease-in-out;
// width: 100vw;

// // ----
// list-style: none;
//   display: flex;
//   justify-content:space-around;
//   flex-flow: row nowrap;

// justify-content:space-around;


export const Ul = styled.ul`
 list-style: none;
   display: flex;
   justify-content:space-between;
   flex-flow: row nowrap;
  font-size:3rem;
  text-align: center;

  li {
    padding: 18px 10px;
  }
  @media (max-width: 2560px) {
    justify-content:center;
    flex-flow: column nowrap;
    background-color: #0e2124;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width:100vw;
    z-index: 10; 
    

    padding-top: 2rem;
    padding-bottom: 2rem;
    transition: transform 0.3s ease-in-out;
    li {
    font-size:2.8rem;
    text-align:center;
    list-style: none;
    text-decoration:none;
    }
    li>.menu-Links:hover {
      transform: scale(0.6);
      transition-duration: 0.5s;
    }
    @media (max-width:768px){
    
  }
`;

