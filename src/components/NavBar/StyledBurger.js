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
    width: 6rem;
    height: 0.27rem;
    background-color: ${({ open }) => open ? '#7f3331' : '#08a7ce'};
    border-radius: 40% 25%;
    transform-origin: 1px;
    transition: all .2s linear;
    

    &:nth-child(1) {
      transform: ${({ open }) => open ?  ('translateX(0%) translateY(30px)'):'translateX(0%)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ?  ('rotate(115deg) translateX(-74px) translateY(-14px)'):'rotate(0)'};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? ('rotate(-115deg) translate(-12px)'): 'rotate(0)'};
    }
    
  }
  @media (max-width:650px){
    display:none;
  }
`;
