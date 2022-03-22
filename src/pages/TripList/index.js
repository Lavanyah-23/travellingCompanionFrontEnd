import { fetchTrips } from "../../store/trips/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectTrips } from "../../store/trips/selectors";
// import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import TripComponent from "../../components/TripComponent/TripComponent";
import Pagination from "../../components/Pagination/index";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import { selectToken } from "../../store/user/selectors";
import "./style.css";
import { textAlign } from "@mui/system";

export default function TripList() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 3;

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const allTrips = useSelector(selectTrips);

  const paginateTrips = (allTrips, limit, offset) => {
    return allTrips.slice(offset, limit + offset);
  };

  function incrementPage() {
    setCurrentPage(currentPage + 1);
  }

  function decrementPage() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className="Trips_List">
      <div className="Trips_Block">
        <h2 style={{ textAlign: "center" }}>All Trips </h2>
        {!token ? (
          <Link to="/signup" style={{ textDecoration: "none", textAlign: "center" }}>
            <h4>Click here to sign in and post a trip😃</h4>
          </Link>
        ) : (
          <Link to="/addtrip">
            <Button
              style={{
                width: 100,
                height: 50,
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              Add Trip
            </Button>
          </Link>
        )}
        <Pagination postPerPage={limit} />
        <Stack
          direction="row"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={1}
        >
          {allTrips ? (
            paginateTrips(allTrips, limit, currentPage * limit).map((trip, index) => {
              return <TripComponent key={index} trip={trip} />;
            })) : (
            <p>Shame, still loading.. no trips today!</p>
          )}
          <br></br>

          {!token
            ? null
            : (
              <div className="buttonsPagenation">
                <Button className="button"
                  variant="secondary"
                  onClick={decrementPage}
                >
                  Previous page
                </Button>
                <Button className="button"
                  variant="primary"
                  onClick={incrementPage}
                >
                  Next page
                </Button>
              </div>
            )}

        </Stack>
      </div>
    </div>
  );
}
