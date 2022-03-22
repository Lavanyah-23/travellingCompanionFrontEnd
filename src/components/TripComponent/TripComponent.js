import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import { Pagination } from "@mui/material";
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
      classname="Trip_ComponentDiv"
      style={{
        backgroundColor: "green",
        padding: "20px 40px",
        borderRadius: 20,
        padding: "20px 20px",
      }}
    >
      <Paper
        className="Paper_Div"
        style={{
          backgroundColor: "burlywood",
          padding: "20px 20px",
        }}
      >
        <h1>{title}</h1>
        <p>Organized by: {organizer.name}</p>
        <p>Country: {country}</p>
        <Link to={`/trips/${id}`}>
          <img width={250} src={image} />
        </Link>
        <p>Starting date of the trip: {startingDate}</p>
        <p>Ending date of the trip: {endDate}</p>
        <p>The maximum number of Travelers: {maximumTravelers}</p>
        <p>Trip description: {description}</p>
        <Link to={`/trips/${id}`}>
          <Button>Look at the trip details</Button>
        </Link>
      </Paper>
    </div>
  );
}
