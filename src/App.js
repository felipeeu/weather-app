import React, { useState, useEffect } from "react";

import axios from "axios";

import InputData from "./components/InputData";

import Card from "./components/Card";

import styled from "styled-components";

const Body = styled.section`
  height: 100vh;
  width: auto;
`;

const Bar = styled.section`
  background-color: chocolate;
  display: flex;
  justify-content: center;
  height: 25vh;
`;

const App = () => {
  const [allStates, setAllStates] = useState({
    query: "Rio de Janeiro",
    location: "",
    temperature: null,
    iconUrl: ""
  });

  const { location, temperature, iconUrl, query } = allStates;

  useEffect(() => {
    apiCall(query);
    return () => {};
  }, [query]);

  const apiCall = query => {
    const APIKey = "b397208261cae24790e5d7b7800ad0d8";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${APIKey}`;
    axios
      .get(`${url}`)
      .then(res => {
        const iconCode = res.data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const temperature = res.data.main.temp;
        const location = res.data.name;

        setAllStates({
          ...allStates,
          iconUrl: iconUrl,
          temperature: temperature,
          location: location
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

  const temperatureCelsius = temperature - 273;
  const fixedTemperature = temperatureCelsius && temperatureCelsius.toFixed(1);
  return (
    <Body>
      <Bar>
        <InputData updateQuery={updateQuery} />
      </Bar>
      <Card icon={iconUrl} temperature={fixedTemperature} location={location} />
    </Body>
  );
};

export default App;
