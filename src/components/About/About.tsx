import React from "react";
import { AboutContent, AboutText, Imagestyle } from "./About.style";
import ProfileImage from "../common/images/Profile-pic.jpg";
import "./About.css"


function About() {
  



  return (
    <div
      id="about"
      className="about"
      style={{ backgroundColor: "#635858", height: "100%", margin: "0px",width:"100%",overflow:"hidden",padding:'0px' }}
    >
      <AboutContent>
        <img src={ProfileImage} alt="/" style={{ ...Imagestyle }} />
        
      <AboutText>
        My name is Glen Asare, and I'm a Software Engineer with 3 years of professional
        experience. In my 3 years of experience I have used many tools and
        applications to solve business problems. I have gained great experience
        by working closely with other engineers. What makes me a great developer
        is the ability to use my soft skills which have been gained while working as an
        IT analyst. I have strong passion for coding especially in the Front
        End. Something that makes me stand out is my ability to be dynamic at adapting quickly to different technologies,
        which is beneficial to my team. My career goal is to one day become an
        individual contributor, while helping out the community with people who
        are have an interest in transitioning into tech. So far in my 3 years of being a
        developer I have gained knowledge with the use of the following tools;
      </AboutText>
      <AboutText>
        React(JS/TS), AWS,
        Github(CI/CD), GIT, Python(Serverless), Database(Postgre/ DynamoDb) ,
        Testing (Jest/Lighthouse), Agile Methodologies,Logs(
        Datadog/CloudWatch/LogRocket)
      </AboutText>
        
      </AboutContent>


    </div>
  );
}

export default About;
