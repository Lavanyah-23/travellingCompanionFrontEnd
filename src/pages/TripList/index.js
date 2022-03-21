import { fetchTrips } from "../../store/trips/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectTrips } from "../../store/trips/selectors";
// import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import TripComponent from "../../components/TripComponent/TripComponent";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";

export default function TripList() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const allTrips = useSelector(selectTrips);

  console.log("what are Trips", allTrips);

  return (
    <div>
      <h2>All Trips</h2>
      {!token ? (
        "Sign in to post a trip"
      ) : (
        <Link to="/addtrip">
          <Button>Add Trip</Button>
        </Link>
      )}
      {allTrips.map((trip, index) => {
        return <TripComponent key={index} trip={trip} />;
      })}
    </div>
  );
}
