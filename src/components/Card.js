import React from "react";
import Weekdays from "./Weekdays";
import styled from "styled-components";

const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    "header header"
    "content1  content2";
  background-color: #f6bc1d;
  overflow: hidden;
  margin: 48px auto 0;
  width: 80vw;
  height: 15vh;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3),
    0 17px 17px 0 rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  @media (min-width: 750px) {
    width: 60vw;
  }
  @media only screen and (max-width: 2000px) and (min-width: 1350px) {
    width: 40vw;
  }
`;

const CardHeader = styled.h1`
  font-size: 3.5em;
  font-family: monospace;
  grid-area: header;
  padding-right: 10px;
  padding-left: 10px;
  text-align: center;
  align-self: center;
  border-bottom-style: solid;
  border-bottom-width: thin;
  height: 100%;
  @media (max-width: 502px) {
    font-size: 2em;
  }
`;

const ContentTemp = styled.h1`
  grid-area: content1;
  align-self: center;
  text-align: center;
  height: 100%;
  font-size: 3.5em;
  font-family: monospace;
  overflow-wrap: break-word;
  border-right-style: solid;
  border-right-width: thin;
  @media only screen and (max-width: 414px) and (min-width: 320px) {
    font-size: 2em;
  }
`;
const Content = styled.img`
  grid-area: content2;
  align-self: center;
  text-align: center;
  font-size: 3.5em;
  overflow-wrap: break-word;
`;

const ImageWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

const Card = ({ icon, temperature, location }) => (
  <CardWrapper>
    <CardHeader>Rio de Janeiro{location}</CardHeader>
    <ContentTemp>
      {temperature ? temperature : ""}
      {temperature ? "°C" : " "}
    </ContentTemp>
    <ImageWrapper>
      <Content src={`${icon}`}></Content>
    </ImageWrapper>
  </CardWrapper>
);

export default Card;
