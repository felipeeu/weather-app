import React, {Component} from 'react';

const card = {
    display: 'block',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    width: '25%',
    marginLeft: '37%',
    marginTop:'2%',
    backgroundColor: 'rgba(255,244,229,0.7)'
       // '#fff3e5'
};

const container = {
    display: 'grid',
    gridTemplateColumns: '51% 51%',
    gridTemplateRows: '14% 12%',
    padding: '2px 16px',

};
const tempStyle = {
    //backgroundColor: 'magenta',
    fontSize: '40px'
};

const textStyle = {
    //backgroundColor: 'red',
    alignSelf: 'center'
};

const sameStyle = {
    //backgroundColor: 'cyan',
    fontSize: '10px',
    fontFamily: ''
};

class Card extends Component {

    render() {
        console.log(this.props)
        const {condition, location, wind, atmosphere, units} = this.props;
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

                </section>
        )
    }
}


export default Card;