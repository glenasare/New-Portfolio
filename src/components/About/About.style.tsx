import styled from "styled-components";


export const AboutContent = styled.div`
    justify-content:center;
    align-items:center;
    display:flex;
    color:#fff;
    min-height:30rem;
    flex-direction:column;
    font-family: 'Darker Grotesque', sans-serif;
    font-size:40px;
    width:100%;
    /* max-width:90vw; */
    padding:30px 0px 20px 10px;
    @media only screen and (max-width: 768px) {
    /* max-width:70vw; */
    padding:0px;
    
  }
   
    
    

`
export const Imagestyle = {
    borderRadius: "100px",
    marginTop:'100px',
    
}
export const AboutText = styled.h4`
   width:80%;
    
    @media only screen and (max-width: 768px) {
    width:80%;
    font-size:20px;
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
   
   
  }
  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-grow: 0.1;
  }
`