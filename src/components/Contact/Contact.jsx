import * as React from "react";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { GrSend } from "react-icons/gr";
import emailjs from "@emailjs/browser";

function Contact() {
  const [notification, setNotification] = React.useState("");

  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_isa2v1c",
        "template_327c12r",
        form.current,
        "moR23s8qZCD1LYK2m"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
          setNotification("Message has been Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div style={{ background: "#000", height: "60vh" }} id="contact">
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{ justifyContent: "center", display: "flex", padding: "100px" }}
      >
        <Card sx={{ justifyContent: "center", display: "flex" }}>
          <Box sx={{ width: "50vw" }}>
            <h3
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              Contact Me
            </h3>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ padding: "50px" }}
            >
              <Grid item xs={6}>
                <TextField
                  type="name"
                  name="first_name"
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="name"
                  name="last_name"
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  type="email"
                  name="user_email"
                  label="Email"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="message"
                  sx={{ width: "100%" }}
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  defaultValue=""
                />
              </Grid>
              <Grid item xs={12} type="submit" value="Send">
                <Button
                  sx={{ width: "100%" }}
                  variant="contained"
                  type="submit"
                  value="Send"
                >
                  Send{" "}
                  <GrSend style={{ fontSize: "20px", paddingLeft: "10px" }} />
                </Button>
              </Grid>
              <h3>{notification}</h3>
            </Grid>
          </Box>
        </Card>
      </form>
    </div>
  );
}

export default Contact;
