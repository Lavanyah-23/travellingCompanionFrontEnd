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

export default function TripList() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfTheFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfTheFirstPost, indexOfLastPost);
  const allTrips = useSelector(selectTrips);

  return (
    <div className="Trips_List">
      <div className="Trips_Block">
        <h2 style={{ textAlign: "center" }}>All Trips </h2>
        {!token ? (
          "Sign in to post a trip"
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
        <Pagination postPerPage={postPerPage} totalPosts={posts.length} />
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={1}
        >
          {allTrips.map((trip, index) => {
            return <TripComponent key={index} trip={trip} />;
          })}
        </Stack>
      </div>
    </div>
  );
}
