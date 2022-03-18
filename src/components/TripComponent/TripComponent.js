import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";


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
    <div style={{ padding: "20px 40px" }} >
      <Paper style={{ padding: "20px 20px" }}>
        <h1>{title}</h1>
        <p>Organized by: {organizer.name}</p>
        <p>Country: {country}</p>
        <Link to={`/trips/${id}`}>
          <img
            width={400}
            src={image}
          />
        </Link>
        <p>Starting date of the trip: {startingDate}</p>
        <p>Ending date of the trip: {endDate}</p>
        <p>The maximum number of Travelers: {maximumTravelers}</p>
        <p>Trip description: {description}</p>
        <Link to={`/trips/${id}`}>
          <Button>Look at the tripdetails</Button>
        </Link>
      </Paper>
    </div>
  )
}