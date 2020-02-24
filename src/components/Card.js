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
  background-color: wheat;
  overflow: hidden;
  margin: 48px auto 0;
  width: 30vw;
  height: 25vh;
  font-family: Poiret One;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3),
    0 17px 17px 0 rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  @media (max-width: 1329px) {
    height: 40vh;
  }
  @media (max-width: 551px) {
    width: 80vw;
    height: 20vh;
  }
`;

const CardHeader = styled.h1`
  font-size: 4em;
  grid-area: header;
  /* background-color: red; */
  text-align: center;
  align-self: center;
  border-bottom-style: solid;
  height: 100%;
  @media (max-width: 699px) {
    font-size: 3em;
  }
  @media (max-width: 373px) {
    font-size: 2em;
  }
`;

const ContentTemp = styled.h1`
  grid-area: content1;
  /* background-color: pink; */
  align-self: center;
  text-align: center;
  height: 100%;
  font-size: 4em;
  overflow-wrap: break-word;
  border-right-style: solid;
  @media (max-width: 1255px) {
    font-size: 3em;
  }
  @media (max-width: 1255px) {
    font-size: 2em;
  }
`;
const Content = styled.img`
  grid-area: content2;
  /* background-color: purple; */
  align-self: center;
  text-align: center;
  /* height: 100%; */
  font-size: 4em;
  overflow-wrap: break-word;
`;

const ImageWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

const Card = ({ icon, temperature, location }) => (
  <CardWrapper>
    <CardHeader>{location}</CardHeader>
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
