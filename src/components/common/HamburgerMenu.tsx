import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { GrMenu } from "react-icons/gr";
import { NavLi } from "./Navbar.style";
import LoginForm from "./LoginForm";

type Anchor = "top" | "left" | "bottom" | "right";

export default function HamburgerMenu() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <NavLi
          style={{ display: "flex" }}
          to="/"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </NavLi>
      </List>
      <Divider />
      <List>
        <NavLi
          style={{ display: "flex" }}
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </NavLi>
      </List>
      <Divider />
      <List>
        <NavLi
          style={{ display: "flex" }}
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        </NavLi>
      </List>
      <Divider />
      <List>
        <NavLi
          style={{ display: "flex" }}
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact Me
        </NavLi>
      </List>
      <Divider />
      <List>
        <NavLi
          style={{ display: "flex" }}
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span onClick={handleClickOpen}>Login</span>
        </NavLi>
      </List>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <div onClick={toggleDrawer(anchor, true)}>
            <GrMenu style={{ fontSize: "40px" }} />
          </div>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
          <LoginForm open={open} onClose={handleClose} />
        </React.Fragment>
      ))}
    </div>
  );
}
