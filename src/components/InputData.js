import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 4px;
  border-radius: 4px;
  width: 35vw;
  height: 20px;
  border: inset;
  font-size: medium;
`;

const InputData = ({ updateQuery }) => (
  <Input
    onChange={event => updateQuery(event.target.value)}
    type="text"
    placeholder="search"
  />
);

export default InputData;
