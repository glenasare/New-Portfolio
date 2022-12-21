import * as React from "react";
import Dialog from '@mui/material/Dialog';

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { GrSend } from "react-icons/gr";

import { Form } from "../Contact/Contact.style";
import httpClient from "./httpClient";





export interface SimpleDialogProps {
    open: boolean;
    onClose: (value: any) => void;
  }
type Credentials = {
  email: string;
  password: string;
};
function LoginForm(props: SimpleDialogProps) {
    const { onClose,  open } = props;
 
 
  const [values, setValues] = React.useState<Credentials>({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState<any>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = values;
    const user = { email, password };

 
      
        
    

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const resp = await httpClient
      .post("https://my-app-flaskk.herokuapp.com/login", user)
      
      .then((response) => {
        console.log(response.status)
        if (response.status === 200) {
          console.log("200")
          
          window.location.href = ("https://my-app-flaskk.herokuapp.com/verify-mobile")
        }
      })
      .catch((error) => setError(error.response.data));
  };

  const handleClose = () => {
    onClose(false);
  };



  const handleChange = (email: any) => (e: any) => {
    setValues({ ...values, [email]: e.target.value });
  };



  return (
    <div >
      {" "}
      <Dialog onClose={handleClose} open={open} sx={{height:'100%'}}>
      <Box>
        <Form onSubmit={handleSubmit}>
         
            <Box sx={{ width: "100%",height:'400px' }}>
              <h3
                style={{
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Login
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
                    onChange={handleChange("password")}
                    type="password"
                    name="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    sx={{ width: "100%" }}
                    variant="contained"
                    type="submit"
                  >
                    Submit{" "}
                    <GrSend style={{ fontSize: "20px", paddingLeft: "10px" }} />
                  </Button>
                </Grid>
                <p style={{ color: "red" }}>{Object.values(error)}</p>
              </Grid>
            </Box>
      
       
        </Form>
      </Box>
    </Dialog>
    </div>
  );
}

export default LoginForm;
