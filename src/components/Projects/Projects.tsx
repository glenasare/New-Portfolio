import { Containter, GridItems } from "./Project.style";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Data } from "./ProjectData";
import backgroundImage from "../common/images/ProjectBackground.jpg";

function Projects() {

  return (
    <div
      id="projects"
      style={{
        background: "#000",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        padding: "0px",
        margin: "0",
      }}
    >
      <Containter
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%"
        }}
      >
        {Data.map((items: any, index: any) => (
          <GridItems key={index}>
            <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
            <a href={items.link} target="blank" style={{textDecoration:'none',color:'#000'}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={items.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {items.project_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {items.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
              <CardActions>
                <a href={items.live} target="blank" style={{textDecoration:'none'}}>
                  <Button size="small" color="primary">
                    Live Site
                  </Button>
                </a>
              </CardActions>
            </Card>
          </GridItems>
        ))}
      </Containter>
    </div>
  );
}

export default Projects;
