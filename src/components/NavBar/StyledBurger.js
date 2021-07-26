import styled from 'styled-components';


export const StyledBurger = styled.div`
  width: 2rem;
  height: 2.2rem;
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
      transform: ${({ open }) => open ?  ('rotate(130deg) translateX(-19px) translateY(-14px)'):'rotate(0)'};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? ('rotate(-130deg) translate(-6px)'): 'rotate(0)'};
    }
    
  }
  @media (max-width:650px){
    display:none;
  }
`;
