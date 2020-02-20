import React from "react";
import Weekdays from "./Weekdays";

const Card = ({ condition, location, wind, atmosphere, units, forecast }) => (
  <div>
    <label>
      {location.city},{location.region}-{location.country}
    </label>
    <section>
      <div>
        {condition.temp}
        {" \xB0"} {units.temperature}
      </div>
      <div>{condition.text}</div>
      <div>
        {" "}
        Wind speed: {wind.speed} {units.speed}
      </div>
      <div> Humidity: {atmosphere.humidity} %</div>
    </section>
    <hr />
    <Weekdays forecast={forecast} units={units} />
  </div>
);

export default Card;
