import ibmImage from "../common/images/IBM.6f1d2a19.png";
import madrigal from "../common/images/Madrigal.jpg";
import bliss from "../common/images/Bliss.jpg";
import smartHome from "../common/images/smarthome.jpg"
import firstProject from "../common/images/FirstPortfolio.jpg"
import movieDatabase from "../common/images/movieDatabase.jpg"
import callMrMoe from "../common/images/CallmrMoe.jpg"

export const Data = [
  {
    project_name: " IBM Church",
    link: "https://github.com/glenasare/Ibmchurch ",
    image: `${ibmImage}`,
    description: "This is a Church Website it was built using ReactJs ",
    live: "",
  },
  {
    project_name: "Call Mr. Moe ",
    link: "https://github.com/glenasare/Call_Mr.Moe ",
    image: `${callMrMoe}`,
    description:" This is a Real Estate Website that was build with ReactJs Framework and Python Backend",
    live:"https://callmrmoe.com/"
  },
  {
    project_name: "Madrigal Carwash ",
    link: " https://github.com/glenasare/MadrigalCarwash",
    image: `${madrigal}`,
    description:" This is a carwash website I am building for a client that is not completed yet. Utililzed React Bootstrap and Styled-components",
    live: "https://madrigalcarwash.com/",
  },
  {
    project_name: "Movie DataBase ",
    link: "https://github.com/glenasare/Movie-Database ",
    image: `${movieDatabase}`,
    description:"This a movie database that utilized different api's that would talk to the IMDB api to get specific information. It was built with ReactTs ",
    live: ""
  },
  {
    project_name: "FirstPortfolio ",
    link: "https://github.com/glenasare/Movie-Database ",
    image: `${firstProject}`,
    description:" This project was built using react-js and python backend. And also utilized google authentication.",
    live: ""
  },
  {
    project_name: "Bliss Records ",
    link: "https://github.com/glenasare/Movie-Database ",
    image: `${bliss}`,
    description:" This is a Record Label Website it was built using ReactJs and Python Backend",
    live: "https://blissrecords.net/"
  },
  {
    project_name: "Smart Home Dashboard",
    link: "https://github.com/glenasare/Movie-Database ",
    image: `${smartHome}`,
    description:" This is a Dashboard that was build with ReactJs Framework. *NOT Mobile Responsive yet work is still in progress",
    live: "https://smarthomep.netlify.app/"
  },
];
