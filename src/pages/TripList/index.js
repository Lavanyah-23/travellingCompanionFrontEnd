import { fetchTrips } from "../../store/trips/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectTrips } from "../../store/trips/selectors";
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import TripComponent from "../../components/TripComponent/TripComponent";



export default function TripList() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const allTrips = useSelector(selectTrips)

  console.log("what are Trips", allTrips)


  return (
    allTrips.map((trip, index) => {
      return (
        <TripComponent
          key={index}
          trip={trip}
        />
      )
    })
  )
}