import React, {Component} from 'react';
import logo from './logo.svg';
import axios from 'axios'

import './App.css';

import Card from './components/Card'

const clientID = 'dj0yJmk9TU9RRHVCb2tGS3YyJmQ9WVdrOWNGTlVjblZRTlRRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0wOQ--';
const clientSecret = 'a7e51eca02dcd579d8da9cc43669f651c13ca6d6';

const inputStyle = {};
const buttonStyle = {};
const card = {
    display: 'block',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    backgroundColor: 'cyan',
    width: '25%',
    marginLeft: '37%'
};

const container = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '2px 16px',
    backgroundColor: 'white'
};
const windStyle = {};

const tempStyle = {};

const textStyle = {};


class App extends Component {

    state = {
        query: 'rio',
        condition: '',
        location: '',
        wind: ''
    };

    componentDidMount() {
        const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20
        (select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.state.query}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`

        axios.get(`${url}`)
            .then(res => {
                const condition = res.data.query.results.channel.item.condition;
                this.setState({condition});
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(`${url}`)
            .then(res => {
                const location = res.data.query.results.channel.location;
                this.setState({location});
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(`${url}`)
            .then(res => {
                const wind = res.data.query.results.channel.wind;
                this.setState({wind});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    updateQuery = (query) => {
        this.setState({query})
    };

    render() {
        const {condition, location, wind} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div>
                    <input onChange={(event) => this.updateQuery(event.target.value)} type='text' style={inputStyle}/>
                    <button onClick={(event) => this.componentDidMount()} style={buttonStyle}/>
                    <Card condition={condition}
                          location={location}
                          wind={wind}/>
                </div>
            </div>
        );
    }
}

export default App;
