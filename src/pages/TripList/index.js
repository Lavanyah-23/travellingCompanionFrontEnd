import { fetchTrips } from "../../store/trips/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectTrips } from "../../store/trips/selectors";
// import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import TripComponent from "../../components/TripComponent/TripComponent";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TripList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const allTrips = useSelector(selectTrips);

  return (
    <div>
      <h2>All Trips</h2>
      <Link to="/addtrip">
        <Button>Add Trip</Button>
      </Link>
      {allTrips.map((trip, index) => {
        return <TripComponent key={index} trip={trip} />;
      })}
    </div>
  );
}
