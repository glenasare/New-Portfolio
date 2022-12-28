import * as React from "react";
import Dialog from "@mui/material/Dialog";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { GrSend } from "react-icons/gr";

import { Form } from "../Contact/Contact.style";
import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
  CognitoUserSession,
} from "amazon-cognito-identity-js";
import { useNavigate,useParams } from "react-router-dom";
import useHandler from "./UserPool";
// import { useQuery } from "react-query";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: any) => void;
}
type Credentials = {
  email: string;
  password: string;
  name: string;
  preferred_username: string;
};
export default function LoginForm(props: SimpleDialogProps) {

  const { userPool } = useHandler();
  let history = useNavigate();
  const params = useParams()
  const { onClose, open } = props;
  const [signup, setSignUp] = React.useState<any>(true);

  const [values, setValues] = React.useState<Credentials>({
    email: "",
    password: "",
    name: "",
    preferred_username: "",
  });


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = React.useState<any>("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const { email, password } = values;
    


    const userData:any = {
      Username: email,
      Pool: userPool
    };

    const userCred = new CognitoUser(userData);
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,

    });

    userCred.authenticateUser(authDetails, {
      onSuccess: (result: CognitoUserSession) => {
        console.log({ result });
        if (result) {
          onClose(false)
          history("/")
          console.log(params)
        }
     
      },
      onFailure: (err) => {
        console.log("onFailure: ", err);
        setError(err)
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
    });

  };
  const handleSignUp = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const { email, password, name, preferred_username } = values;
  
    const userEmail = new CognitoUserAttribute({
      Name: "email",
      Value: email,
    });
    const usersName = new CognitoUserAttribute({
      Name: "name",
      Value: name,
    });
    const preferred_Username = new CognitoUserAttribute({
      Name: "preferred_username",
      Value: preferred_username,
    });

    userPool.signUp(
      email,
      password,
      [userEmail, usersName, preferred_Username],
      [],
      (err: any, data: any) => {
        if (err) {
          console.error(err);
          window.location.reload()
        }
        if (data) {
          window.location.reload();
        }
      }
    );
  };

  const handleClose = () => {
    onClose(false);
  };

  const handleChange = (email: any) => (e: any) => {
    setValues({ ...values, [email]: e.target.value });
  };

  const handleClick = () => {
    setSignUp(!signup);
  };

  return (
    <div>
      {" "}
      <Dialog onClose={handleClose} open={open} sx={{ height: "100%" }}>
        <Box>
          <Form onSubmit={signup ? handleLogin : handleSignUp}>
            <Box sx={{ width: "100%", height: "400px" }}>
              <h3
                style={{
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                {signup ? "Login" : "SignUp"}
              </h3>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ padding: "50px" }}
              >
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    required
                    value={values.email}
                    onChange={handleChange("email")}
                    type="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    value={values.password}
                    required
                    onChange={handleChange("password")}
                    type="password"
                    name="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                {signup ? (
                  " "
                ) : (
                  <>
                    <Grid item xs={6}>
                      <TextField
                        value={values.name}
                        required
                        onChange={handleChange("name")}
                        type="text"
                        name="name"
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        value={values.preferred_username}
                        required
                        onChange={handleChange("preferred_username")}
                        type="text"
                        name="preferred_username"
                        id="outlined-basic"
                        label="UserName"
                        variant="outlined"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                  </>
                )}
                <Grid item xs={12}>
                  <Button
                    sx={{ width: "100%" }}
                    variant="contained"
                    type="submit"
                  >
                    Submits{" "}
                    <GrSend style={{ fontSize: "20px", paddingLeft: "10px" }} />
                  </Button>
                </Grid>
                <p
                  onClick={handleClick}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  {" "}
                  {signup ? "Sign Up" : "Login"}
                </p>
                
              </Grid>
              <p style={{ color: "red" }}>Error: {Object.values(error)}</p>
            </Box>
          </Form>
        </Box>
      </Dialog>
    </div>
  );
}
