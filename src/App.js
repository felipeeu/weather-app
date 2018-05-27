import React, {Component} from 'react';
import logo from './logo.svg';
import axios from 'axios'

import './App.css';

const clientID = 'dj0yJmk9TU9RRHVCb2tGS3YyJmQ9WVdrOWNGTlVjblZRTlRRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0wOQ--';
const clientSecret = 'a7e51eca02dcd579d8da9cc43669f651c13ca6d6';

const inputStyle = {}


class App extends Component {

    state = {
        query:'rio',
        forecast: []
    };

    componentDidMount() {
        const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20
        (select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.state.query}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`

        axios.get(`${url}`)
            .then(res => {
                const forecast = res.data.query.results.channel.item;
                this.setState({forecast});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    updateQuery = (query) => {
        this.setState({query})
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <div>
                    <input onChange={(event) => this.updateQuery(event.target.value)} type = 'text' style={inputStyle}/>
                    <button onClick={(event) => this.componentDidMount ()}></button>

                    {console.log(this.state.forecast)}
                    {console.log(this.state.query)}
                </div>


            </div>
        );
    }
}

export default App;
