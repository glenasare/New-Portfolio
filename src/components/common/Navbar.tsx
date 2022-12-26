import React from "react";
import { Logo, NavLi, NavMain, NavMenu, NavUl } from "./Navbar.style";
import HamburgerMenu from "./HamburgerMenu";
import LoginForm from "./LoginForm";
import useHandler from "./UserPool";


function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(true);
  const [userData, setUserData] = React.useState<any>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userPool,getAuthenticatedUser } = useHandler();


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUserSession = React.useCallback(() => {
    if (getAuthenticatedUser()?.getUsername()){
      setUser(false)
      setUserData(getAuthenticatedUser()?.getUsername())
    }
  }, [getAuthenticatedUser]);
  
  React.useEffect(() => {
    getUserSession();
  }, [getUserSession]);

  
  


  
  

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };


  const logOut = () => {
    console.log("userSign Out")
    getAuthenticatedUser()?.signOut()
    window.location.reload()
  }


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
            {/* {[userData]?.map((item: any) => (
              <>
                <span>{item.first_name}</span> <span>{item.last_name}</span>
              </>
            ))} */}
            {userData}
            
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
            <HamburgerMenu
              userdata={userData}
              user={user}
              login={login}
             
            />
          </NavMenu>
        </NavUl>
      </NavMain>
      <LoginForm open={open} onClose={handleClose}/>
    </div>
  );
}

export default Navbar;
