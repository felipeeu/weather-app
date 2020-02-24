import React from "react";
import Card from "./Card";
import styled from "styled-components";

const InputContainer = styled.section`
  align-self: center;
`;

const Input = styled.input`
  border-radius: 4px;
  border-radius: 4px;
  width: 35vw;
  height: 20px;
  border: inset;
  font-size: medium;
`;

const InputData = ({ updateQuery }) => (
  <InputContainer>
    <Input onChange={event => updateQuery(event.target.value)} type="text" />
  </InputContainer>
);

export default InputData;
