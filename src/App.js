import React, {Component} from 'react';
import logo from './logo.svg';
import axios from 'axios'

import './App.css';

import Card from './components/Card'

const clientID = 'dj0yJmk9TU9RRHVCb2tGS3YyJmQ9WVdrOWNGTlVjblZRTlRRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0wOQ--';
const clientSecret = 'a7e51eca02dcd579d8da9cc43669f651c13ca6d6';

const inputStyle = {
    marginBottom: '5%',
    marginTop: '1%'
};
const buttonStyle = {};
const AppStyle = {
    backgroundColor: '#FDA328'
};
const secStyle = {}

class App extends Component {

    state = {
        query: null,
        condition: '',
        location: '',
        wind: '',
        atmosphere: '',
        units: '',
        forecast: []
    };

    componentDidMount() {

        const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20
        (select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.state.query}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`

        axios.get(`${url}`)
            .then(res => {
                const condition = res.data.query.results.channel.item.condition;
                const location = res.data.query.results.channel.location;
                const wind = res.data.query.results.channel.wind;
                const atmosphere = res.data.query.results.channel.atmosphere;
                const units = res.data.query.results.channel.units;
                const forecast = res.data.query.results.channel.item.forecast;

                this.setState({condition, location, wind, atmosphere, units, forecast});
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    updateQuery = (query) => {
        const trimmedQuery = query.trim()
        this.setState({query: trimmedQuery});
        trimmedQuery?
            this.componentDidMount() : null
    };

    render() {

        const {condition, location, wind, atmosphere, units, forecast, query} = this.state;
        return (
            <div style={AppStyle} className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Previsão do Tempo</h1>
                </header>
                <section style={secStyle}>
                    {query ?
                        <Card condition={condition}
                              location={location}
                              wind={wind}
                              atmosphere={atmosphere}
                              units={units}
                              forecast={forecast}/> : null}

                    <input onChange={(event) => this.updateQuery(event.target.value)} type='text' style={inputStyle}/>
                    <hr/>
                    <h1>Capitais:</h1>
                </section>
            </div>
        );
    }
}

export default App;
