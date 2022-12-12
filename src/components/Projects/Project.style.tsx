import styled from "styled-components";

export const Containter = styled.div`
  display: grid;
  
  padding: 10px;
  /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: auto ;
    padding: 10px;
    
   

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: auto ;
    padding: 10px;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto ;
    padding: 10px;
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
}

 
`;
export const GridItems = styled.div`
  padding: 20px;
  font-size: 30px;
  text-align: center;
  
`;
