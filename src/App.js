import React, { Component } from "react";

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

const clientID =
  "dj0yJmk9TU9RRHVCb2tGS3YyJmQ9WVdrOWNGTlVjblZRTlRRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0wOQ--";
const clientSecret = "a7e51eca02dcd579d8da9cc43669f651c13ca6d6";

class App extends Component {
  state = {
    query: null,
    condition: "",
    location: "",
    wind: "",
    atmosphere: "",
    units: "",
    forecast: []
  };

  componentDidMount() {
    const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20
        (select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.state.query}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

    axios
      .get(`${url}`)
      .then(res => {
        const condition = res.data.query.results.channel.item.condition;
        const location = res.data.query.results.channel.location;
        const wind = res.data.query.results.channel.wind;
        const atmosphere = res.data.query.results.channel.atmosphere;
        const units = res.data.query.results.channel.units;
        const forecast = res.data.query.results.channel.item.forecast;

        this.setState({
          condition,
          location,
          wind,
          atmosphere,
          units,
          forecast
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  updateQuery = query => {
    const trimmedQuery = query.trim();
    this.setState({ query: trimmedQuery });
    trimmedQuery ? this.componentDidMount() : null;
  };

  render() {
    const {
      condition,
      location,
      wind,
      atmosphere,
      units,
      forecast,
      query
    } = this.state;
    return (
      <Body>
        <Bar>
          <InputData updateQuery={this.updateQuery} />
        </Bar>
        {/* {query ? ( */}
        <Card
          condition={condition}
          location={location}
          wind={wind}
          atmosphere={atmosphere}
          units={units}
          forecast={forecast}
        />
        {/* ) : null} */}
      </Body>
    );
  }
}

export default App;
