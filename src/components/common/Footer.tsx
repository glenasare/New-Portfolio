import React from "react";
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';
function Footer() {
  return (
    <div>

   
    <Divider style={{color:'white'}} />
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",background:'lightblue'
      }}
    >
      {" "}
      
      <h4> Copyright © 2022 Glen Asare - All Rights Reserved</h4>
    </div>
    </div>
  );
}

export default Footer;
