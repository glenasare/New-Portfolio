import styled from "styled-components";

export const HomeMain = styled.div`
  color: #000;
  justify-content: center;
  display: flex;
  height:100vh;
 
`;
export const HomeContent = styled.div`
  height: 100vh;
`;
export const SocialMedia = styled.div`
  padding-top: 30rem;
  width: 10px;
  font-size: 30px;
  margin: 30px;
  justify-content: space-between;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  @media (max-width: 768px) {
    margin-left: -0.001px;
    color: #000;
    margin-top: 100px;
  }
`;
export const HomeStyle = {
  background: "#EDEDED",
  height: "100%",
  top: 80,
  color: "#000",
  width:"100%",
  maxHeight:'100vh'
};

export const WelcomeText = styled.div`
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    display: flex;
    align-items: center;
    align-content: center;
    padding: 100px;
  }
`;

export const WelcomeTextStyle = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  minHeight: "50rem",
  color: "white",
  fontFamily: "'Days One', sans-serif",
  fontSize: "50px",
};
export const DownloadButton = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  color: "white",
  
}
