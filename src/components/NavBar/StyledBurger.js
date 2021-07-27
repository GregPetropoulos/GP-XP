import styled from 'styled-components';


export const StyledBurger = styled.div`
  width: 5rem;
  height: 4rem;
  cursor: pointer;
  position: fixed;
  margin-top: 10px;
  margin-bottom: 2px;
  top: 15px;
  right: 80px;
  z-index: 9999;
  display: none;

  @media (max-width: 2560px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column wrap;
    z-index:11;

  
  div {
    width: 4rem;
    height: 0.4rem;
    background-color: ${({ open }) => open ? '#7f3331' : '#08a7ce'};

    border-radius: 26% 25%;
    transform-origin: 25px;
    transition: all .2s linear;
    

    &:nth-child(1) {
      transform: ${({ open }) => open ?  ('rotate(60deg) translateX(18px) translateY(-10px)'):'translateX(0%)'};
      // opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ?  ('rotate(-60deg) translateX(-7px) translateY(-9px)'):'rotate(0)'};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? ('rotate(0deg) translate(0px)'): 'rotate(0)'};
    }
    
  }
  @media (max-width:768px){
    // width: 5rem;
    width:0;
    // height: 4rem;
    cursor: pointer;
    position: fixed;
    margin-top: 10px;
    // padding:7px;
    // margin-bottom: 7px;
    // top: 15px;
    right: 80px;
    z-index: 9999;
    // display: none;
    display:flex;
  //  flex-wrap: rowwrap;

    // justify-content: center;
  }
`;
