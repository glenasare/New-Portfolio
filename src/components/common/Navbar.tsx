import React from "react";
import { Logo, NavLi, NavMain, NavMenu, NavUl } from "./Navbar.style";
import HamburgerMenu from "./HamburgerMenu";
import LoginForm from "./LoginForm";
import axios from "axios";
import httpClient from "./httpClient";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(true);
  const [userData, setUserData] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  axios.defaults.baseURL = "http://127.0.0.1:5000";

  // Set the default credentials for the request
  axios.defaults.withCredentials = true;
  const getData = React.useCallback(async () => {
    console.log("useCallBack");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const resp = await httpClient
      .get("//localhost:5000/")
      .then(async (response) => {
        if (response.status === 401) {
          await httpClient.get("//localhost:5000/user").then((response) => {
            if (response.status === 200) {
              console.log("Logging In...");
              setUser(false);
            }
          });
        } else if (response.status === 200) {
          setUser(false);
          console.log("Already Logged In", user);
          await httpClient.get("//localhost:5000/user").then((response) => {
            if (response.status === 200) {
              console.log("Getting User Info...");
              setUserData(response.data);
            }
          });
        }
      });
  }, []);
  React.useEffect(() => {
    getData();
  }, [getData]);
  console.log(userData);

  const logOut = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const resp = await httpClient
      .get("//localhost:5000/logout")
      .then((response) => {
        if (response.status === 200) setUser(true);
        window.location.reload();
      });
  };
  console.log(user);

  const login = user ? <span onClick={handleClickOpen}>Login</span> : " ";
  const logout = user ? " " : <span onClick={logOut}>Logout</span>;

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
          <NavLi
            to=""
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {userData.map((item: any) => (
              <>
                <span>{item.first_name}</span> <span>{item.last_name}</span>
              </>
            ))}
          </NavLi>
          <NavLi
            to=""
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {login}
            {logout}
          </NavLi>

          <NavMenu>
            {" "}
            <HamburgerMenu />
          </NavMenu>
        </NavUl>
      </NavMain>
      <LoginForm open={open} onClose={handleClose}/>
    </div>
  );
}

export default Navbar;
