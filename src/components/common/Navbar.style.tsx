import styled from "styled-components";

import { Link} from "react-scroll";

export const NavMain = styled.div`
  height: 90px;
  width: 100%;
  background-color: #fff;
  top: 0;
  position: fixed;
  z-index: 99;
  align-items: center;
  display: inline-block;
 
  @media only screen and (max-width: 768px) {
    height: 90px;
    width: 100%;
    background-color: #fff;
    top: 0;
    position: fixed;
    z-index: 99;
    overflow:hidden;
    
  }
  @media only screen and (max-width: 1200px) {
    height: 90px;
    width: 100%;
    background-color: #fff;
    top: 0;
    position: fixed;
    z-index: 99;
   overflow:hidden;
  }
`;

export const NavUl = styled.ul`
  justify-content: flex-end;
  align-items: center;
  display: flex;
  list-style-type: none;
  font-family: "K2D", sans-serif;
`;
export const NavLi = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 20px 40px 20px 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-color: gray;
  }
  @media (max-width: 968px) {
    display: none;
  }
`;
export const Logo = styled.h1`
  color: #000;
  flex-grow: 1;
  font-family: "Capriola", sans-serif;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;
export const NavMenu = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-grow: 1;
  }
  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-grow: 0.1;
  }
`;
