import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import "./style.css";

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
  } = props.trip;

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        padding: "20px 40px",
        borderRadius: 20,
      }}
    >
      <Paper
        className="Paper_Div"
        style={{
          backgroundColor: "verylightgrey",
          padding: "20px 20px",
        }}
      >
        <h1>{title}</h1>
        <br></br>

        <Link to={`/trips/${id}`}>
          <img width={250} src={image} alt={title} />
        </Link>
        <p>Organized by: {organizer.name}</p>
        <p>Country: {country}</p>
        <p>Departure date: {startingDate}</p>
        <p>Arrival date: {endDate}</p>
        <p>Maximum travelers: {maximumTravelers}</p>
        <p>Trip description: {description}</p>
        <Link to={`/trips/${id}`}>
          <Button>Look at the trip details</Button>
        </Link>
      </Paper>
    </div>
  );
}
