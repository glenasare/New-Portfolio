import React from "react";
import { AboutContent, AboutText, Imagestyle } from "./About.style";
import ProfileImage from "../common/images/Profile-pic.jpg";

function About() {
  return (
    <div
      id="about"
      style={{ backgroundColor: "#000", height: "100%", margin: "0px",width:"100%",overflow:"hidden",padding:'0px' }}
    >
      <AboutContent>
        <img src={ProfileImage} alt="/" style={{ ...Imagestyle }} />
        
      <AboutText>
        My name is Glen Asare, and I'm a Software Engineer with 3 years of
        Experience. In my professional experience I have used many tools and
        applications to solve business problems. I have gained great experience
        by working closely with other engineers. What makes me a great developer
        is the ability to use my soft skills which was gained while working as a
        IT analyst. I have strong passion for coding especially in the Front
        End. What makes me stand out is the ability to be dynamic when needed,
        which helps my team a-lot. My career goal is to one day become an
        individual contributor, while helping out the community with people who
        are willing to transition into tech. So far in my 3 years of being a
        developer
      </AboutText>
      <AboutText>
        I have gained knowledge with the use of React(JS/TS), AWS,
        Github(CI/CD), GIT, Python(Serverless), Database(Postgre/ DynamoDb) ,
        Testing (Jest/Lighthouse), Agile Methodologies,Logs(
        Datadog/CloudWatch/LogRocket)
      </AboutText>
        
      </AboutContent>


    </div>
  );
}

export default About;
