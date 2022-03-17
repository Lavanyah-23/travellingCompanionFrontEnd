import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function TripComponent(props) {

  const {
    id,
    title,
    country,
    description,
    startingDate,
    image,
    maximumTravelers,
    endDate,
    organizer,
  } = props.trip

  return (
    <div>
      <h1>{title}</h1>
      <p>Organized by: {organizer.name}</p>
      <p>Country: {country}</p>
      <img
        width={400}
        src={image}
      />
      <p>Starting date of the trip: {startingDate}</p>
      <p>Ending date of the trip: {endDate}</p>
      <p>The maximum number of Travelers: {maximumTravelers}</p>
      <p>Trip description: {description}</p>
      <Link to={`/trips/${id}`}>
        <Button>Look at the tripdetails</Button>
      </Link>
    </div>
  )
}