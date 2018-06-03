import React, {Component} from 'react';
//components
import Weekdays from "./Weekdays";


const card = {
    display: 'block',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    width: '25%',
    marginLeft: '37%',
    marginTop: '2%',
    backgroundColor: 'rgba(255,244,229,0.7)'

};

const container = {
    display: 'grid',
    gridTemplateColumns: '51% 51%',
    gridTemplateRows: '14% 12%',
    padding: '2px 16px',

};
const tempStyle = {
    fontSize: '40px'
};

const textStyle = {
    alignSelf: 'center',
    fontSize: '40px'

};

const sameStyle = {
    fontSize: '10px',
    fontFamily: ''
};

class Card extends Component {

    render() {

        const {condition, location, wind, atmosphere, units, forecast} = this.props;
        return (
            <section style={card}>
                <label>
                    {location.city},{location.region}-{location.country}
                </label>
                <section style={container}>
                    <div style={tempStyle}>{condition.temp}{' \xB0'} {units.temperature}</div>
                    <div style={textStyle}>{condition.text}</div>
                    <div style={sameStyle}> Wind speed: {wind.speed} {units.speed}</div>
                    <div style={sameStyle}> Humidity: {atmosphere.humidity} %</div>
                </section>
                <hr/>
                <Weekdays
                forecast={forecast}
                units={units}
                />
            </section>
        )
    }
}


export default Card;