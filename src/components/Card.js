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
  width: 80vw;
  height: 40vh;
  font-family: Poiret One;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3),
    0 17px 17px 0 rgba(0, 0, 0, 0.15);
  border-radius: 15px;
`;

const CardHeader = styled.h1`
  font-size: 4em;
  grid-area: header;
  /* background-color: red; */
  text-align: center;
  align-self: center;
  border-bottom-style: solid;
  height: 100%;
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
`;
const Content = styled.h1`
  grid-area: content2;
  /* background-color: purple; */
  align-self: center;
  text-align: center;
  height: 100%;
  font-size: 4em;
  overflow-wrap: break-word;
`;

const Card = ({ condition, location, wind, atmosphere, units, forecast }) => (
  <CardWrapper>
    <CardHeader>Rio de Janeiro, RJ - Brasil</CardHeader>
    <ContentTemp>25oC</ContentTemp>
    <Content>Chuvoso</Content>
  </CardWrapper>
);

export default Card;
