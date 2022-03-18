import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectOneTrip } from "../../store/trips/selectors";
import { fetchUsersOneTrip } from "../../store/trips/actions";
import { Form, Button } from "react-bootstrap";
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import moment from "moment";
import PostComment from "../../components/PostComment";

export default function TripDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const moment = require("moment");

  useEffect(() => {
    dispatch(fetchUsersOneTrip(id));
  }, [dispatch, id]);

  const oneTrip = useSelector(selectOneTrip);

  if (!oneTrip) {
    return null;
  }

  return (
    <div style={{ padding: "40px 40px" }}>
      <Paper style={{ padding: "20px 20px" }}>
        <h3>{oneTrip.title}</h3>
        <p>
          We are going to: <strong>{oneTrip.country}</strong>
        </p>
        <img width={400} src={oneTrip.image} alt={oneTrip.title} />
        <p>
          Something about the destination:{" "}
          <strong>{oneTrip.description}</strong>
        </p>
        <p>
          Maximum travelers for this trip:{" "}
          <strong>{oneTrip.maximumTravelers}</strong>
        </p>
        <p>
          Date of departure: <strong>{oneTrip.startingDate}</strong>
        </p>
        <p>
          Date of arrival: <strong>{oneTrip.endDate}</strong>{" "}
        </p>
      </Paper>

      <div style={{ padding: 14 }} className="App">
        <h3>Comments</h3>

        {!oneTrip.comments
          ? "loading"
          : oneTrip.comments.map((comment) => {
              return (
                <div>
                  <Paper style={{ padding: "40px 20px" }}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <Avatar
                          alt={comment.name}
                          src={comment.user.imageAvatar}
                        />
                      </Grid>
                      <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>
                          {comment.name}
                        </h4>
                        <p style={{ textAlign: "left" }}>{comment.comment}</p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                          {moment(comment.createdAt).format(
                            "YYYY-MM-DD hh:mm A"
                          )}
                        </p>
                      </Grid>
                      <Divider
                        variant="fullWidth"
                        style={{ margin: "30px 0" }}
                      />
                    </Grid>
                  </Paper>
                </div>
              );
            })}

        <PostComment id={oneTrip.id} />
      </div>
    </div>
  );
}
