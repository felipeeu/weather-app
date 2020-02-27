import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-top: 10px;
  color: white;
  background-color: #1d2bf6;
  border: none;
  border-radius: 3px;
  font-size: 15px;

  :active {
    transform: translateY(4px);
  }
`;

const ButtonComponent = ({ insertCard, query }) => (
  <Button onClick={() => insertCard(query)}>Add Card</Button>
);

export default ButtonComponent;
