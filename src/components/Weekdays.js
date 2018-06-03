import React, {Component} from 'react';

const forecastStyle = {
    display: 'grid',
    gridTemplateColumns: '20% 20% 20% 20% 20%'
};

class Weekdays extends Component {

    render() {
        const {forecast, units} = this.props;
        return (
            <div style={forecastStyle}>
                {forecast && forecast.slice(0, 5)
                    .map(data => (
                        <div key={data.date}>
                            <label>{data.day}</label>
                            <p>{data.high} {units.temp} {data.low} {units.temp}</p>
                        </div>
                    ))}
            </div>
        )
    }
}

export default Weekdays