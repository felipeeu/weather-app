import React from "react";

const Weekdays = ({ forecast, units }) => (
  <div>
    {forecast &&
      forecast.slice(0, 5).map(data => (
        <div key={data.date}>
          <label>{data.day}</label>
          <p>
            {data.high} {units.temp} {data.low} {units.temp}
          </p>
        </div>
      ))}
  </div>
);

export default Weekdays;
