import React from "react";
import { Logo, NavLi, NavMain, NavMenu, NavUl } from "./Navbar.style";
import { Squash as Hamburger, Squash } from "hamburger-react";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  return (
    <div>
      <NavMain>
        <NavUl>
          <Logo> Glen Asare</Logo>
          <NavLi
            to="/"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </NavLi>
          <NavLi
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </NavLi>
          <NavLi
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </NavLi>
          <NavLi
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Me
          </NavLi>

          <NavMenu>
            {" "}
            <HamburgerMenu />
          </NavMenu>
        </NavUl>
      </NavMain>
    </div>
  );
}

export default Navbar;
