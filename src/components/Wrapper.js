import React from "react";
import Card from "./Card";

const Wrapper = ({
  query,
  condition,
  location,
  wind,
  atmosphere,
  units,
  forecast,
  updateQuery
}) => (
  <div>
    {query ? (
      <Card
        condition={condition}
        location={location}
        wind={wind}
        atmosphere={atmosphere}
        units={units}
        forecast={forecast}
      />
    ) : null}

    <input onChange={event => updateQuery(event.target.value)} type="text" />
  </div>
);

export default Wrapper;
