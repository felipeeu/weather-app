import React, {Component} from 'react';





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

class Card extends Component {

    render() {
        console.log(this.props)
        const {condition, location, wind} = this.props;
        return (
            <div>
                <section style={card}>
                    <p>{location.city},{location.region}-{location.country}</p>
                    <div style={container}>
                        <div style={tempStyle}>{condition.temp}{' \xB0F'}</div>
                        <div style={textStyle}>{condition.text}</div>
                    </div>
                    <div style={windStyle}>{wind.speed} mph</div>
                </section>
            </div>


        )
    }
}


export default Card;