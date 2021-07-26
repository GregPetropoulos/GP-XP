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
   justify-content:space-around;
   flex-flow: row nowrap;
  font-size:1.8rem;
  text-align: center;

  li {
    padding: 18px 10px;
  }
  @media (max-width: 2560px) {
    flex-flow: column nowrap;
    background-color: #7f3331;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width:100vw;
    z-index: 10; 
    
    justify-content:center;

    padding-top: 2rem;
    padding-bottom: 2rem;
    transition: transform 0.3s ease-in-out;
    justify-content:center;
    list-style: none;
    text-decoration:none;
    li {
    font-size:2.8rem;
    text-align:center;
    }
    @media (max-width: 650px) {
       li {
        display:block;
        font-size:3rem;
    position: relative;

      }
    }
    
  }
`;

