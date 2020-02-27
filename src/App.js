import React, { useState, useEffect } from "react";

import axios from "axios";

import InputData from "./components/InputData";

import Card from "./components/Card";

import ButtonComponent from "./components/ButtonComponent";

import styled from "styled-components";

const Body = styled.section`
  height: 100vh;
  width: auto;
`;

const Bar = styled.section`
  background-color: #f6861d;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 25vh;
`;
const Header = styled.h1``;

const App = () => {
  const [allStates, setAllStates] = useState({
    query: "",
    data: []
  });

  const { data, query } = allStates;

  useEffect(() => {
    return () => {};
  }, [data]);

  const apiCall = query => {
    const APIKey = "b397208261cae24790e5d7b7800ad0d8";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${APIKey}`;
    axios
      .get(`${url}`)
      .then(res => {
        const id = res.data.id;
        const iconCode = res.data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const temperature = res.data.main.temp;
        const temperatureCelsius = temperature - 273;
        const fixedTemperature =
          temperatureCelsius && temperatureCelsius.toFixed(1);
        const location = res.data.name;

        setAllStates({
          ...allStates,
          data: data.concat({
            iconUrl: iconUrl,
            temperature: fixedTemperature,
            location: location,
            id: id
          })
        });
      })
      .catch(function(error) {
        return error;
      });
  };

  const updateQuery = query => {
    const trimmedQuery = query.trim();
    setAllStates({ ...allStates, query: trimmedQuery });
  };

  const insertCard = query => {
    apiCall(query);
  };

  const deleteCard = id => {
    setAllStates({
      ...allStates,
      data: data && data.filter(item => item.id !== id)
    });
  };

  return (
    <Body>
      <Bar>
        <Header>Weather Condition</Header>
        <InputData updateQuery={updateQuery} />
        <ButtonComponent insertCard={insertCard} query={query} />
      </Bar>
      {data &&
        data.map((item, idx) => {
          return (
            <Card
              icon={item.iconUrl}
              temperature={item.temperature}
              location={item.location}
              id={item.id}
              key={idx}
              deleteCard={deleteCard}
            />
          );
        })}
    </Body>
  );
};

export default App;
