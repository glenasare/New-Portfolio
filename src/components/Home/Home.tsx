import React from "react";
import {
  DownloadButton,
  HomeContent,
  HomeMain,
  HomeStyle,
  SocialMedia,
  WelcomeText,
  WelcomeTextStyle,
} from "./Home.style";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import codingImage from "../common/images/codingImage.jpg";
import Button from "@mui/material/Button";
import Typed from "react-typed";
import About from "../About/About";

function Home(): JSX.Element {
  const githubRouter = () => {
    window.location.href = " https://github.com/glenasare";
  };

  const linkedInbRouter = () => {
    window.location.href = "https://www.linkedin.com/in/glen-asare-6b1bb61a2/";
  };
  const downloadResume = () => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=19ChLfuqetKn-G-MinXJTJOh2AK6Fw3aa";
  };
  ///19ChLfuqetKn-G-MinXJTJOh2AK6Fw3a
  return (
    <div id="/" style={{ ...HomeStyle }}>
      <SocialMedia>
        <div style={{ paddingTop: "10px" }} onClick={githubRouter}>
          <BsGithub />
        </div>
        <div style={{ paddingTop: "10px" }} onClick={linkedInbRouter}>
          <BsLinkedin />
        </div>
      </SocialMedia>
      <HomeMain>
        <HomeContent
          style={{
            backgroundImage: `url(${codingImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "80%",
          }}
        >
          <h1 style={WelcomeTextStyle}>
            <Typed
              strings={[
                "I'm a Full Sta",
                "I'm a Software En",
                "I'm Glen Asare",
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </h1>
          <div style={{...DownloadButton,position:"static"}}>
            <Button
              variant="outlined"
              sx={{
                background: "#ffffff",
                color: "#0c0c0c",
                borderColor: "#ffffff",
              }}
              onClick={downloadResume}
            >
              Download Resume
            </Button>
          </div>
        </HomeContent>
      </HomeMain>
    </div>
  );
}

export default Home;
