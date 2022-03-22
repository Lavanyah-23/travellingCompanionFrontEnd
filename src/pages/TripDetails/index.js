import React from "react";
import io from "socket.io-client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectOneTrip } from "../../store/trips/selectors";
import { selectUser } from "../../store/user/selectors";
import { fetchUsersOneTrip, changeTraveler } from "../../store/trips/actions";
import { Divider, Avatar, Grid, Paper, Button } from "@material-ui/core";
import PostComment from "../../components/PostComment";
import Chat from "../../components/Chat.js";
import { useState } from "react";
import "./style.css";

const socket = io.connect("http://localhost:4001");

export default function TripDetails() {
  const [clicked, setClicked] = useState(false);
  const [clickedGo, setClickedGo] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const { id } = useParams();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const moment = require("moment");

  useEffect(() => {
    dispatch(fetchUsersOneTrip(id));
  }, [dispatch, id]);

  const oneTrip = useSelector(selectOneTrip);

  const goOrNotGO = () => {
    dispatch(changeTraveler(id));
    setClicked(!clicked);
    setClickedGo(!clickedGo);
  };

  if (!oneTrip) {
    return null;
  }

  const alreadyTraveler = !oneTrip.traveler
    ? console.log("no traveler yet")
    : oneTrip.traveler.find((traveler) => {
        return user.id === traveler.id;
      });

  const joinRoom = () => {
    socket.emit("join_room", id);
    setShowChat(true);
  };

  const token = localStorage.getItem("token");

  return (
    <div>
      <div className="Trip_Detail_Info" style={{ padding: "40px 40px" }}>
        <Paper key={oneTrip.id} style={{ padding: "20px 20px" }}>
          <div className="Detail_Block">
            <h2 style={{ border: "1px" }}>{oneTrip.title}</h2>
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
          </div>{" "}
          {!token ? (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="succes" style={{ margin: 10 }}>
                Want to go on this trip? Please log in first!
              </Button>
            </Link>
          ) : !clickedGo ? (
            alreadyTraveler ? (
              <Button
                variant="outlined"
                color="succes"
                style={{ margin: 10 }}
                onClick={goOrNotGO}
              >
                Click to 'not go' on this trip!
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="succes"
                style={{ margin: 10 }}
                onClick={goOrNotGO}
              >
                Click to 'go' on this trip
              </Button>
            )
          ) : !alreadyTraveler ? (
            <Button
              variant="outline"
              color="Danger"
              style={{ margin: 10 }}
              onClick={goOrNotGO}
            >
              Click to 'not go' on this trip!
            </Button>
          ) : (
            <Button
              variant="outline"
              color="success"
              style={{ margin: 10 }}
              onClick={goOrNotGO}
            >
              Click to 'go' on this trip
            </Button>
          )}
          <br></br>
          {!clicked ? (
            !alreadyTraveler ? (
              <Button variant="outlined" color="succes" style={{ margin: 10 }}>
                'Go' and chat with fellow travelers
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="succes"
                style={{ margin: 10 }}
                onClick={joinRoom}
              >
                Join Livechat for this trip!
              </Button>
            )
          ) : alreadyTraveler ? (
            <Button variant="outlined" color="succes" style={{ margin: 10 }}>
              'Go' and chat with fellow travelers
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="succes"
              style={{ margin: 10 }}
              onClick={joinRoom}
            >
              Join Livechat for this trip!
            </Button>
          )}
        </Paper>
        {!showChat ? (
          ""
        ) : (
          <Chat socket={socket} username={user.name} room={id} />
        )}
        <div style={{ padding: 14 }} className="Comments_TripDetails">
          <h3>Comments</h3>

          {!oneTrip.comments
            ? "loading"
            : oneTrip.comments.map((comment) => {
                return (
                  <div key={comment.id}>
                    <Paper style={{ padding: "40px 20px" }}>
                      <Grid
                        justifyContent="center"
                        container
                        wrap="nowrap"
                        spacing={2}
                      >
                        <Grid item>
                          <Avatar
                            alt={comment.name}
                            src={comment.user.imageAvatar}
                          />
                        </Grid>
                        <Grid item xs zeroMinWidth>
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
          {user.token ? <PostComment id={oneTrip.id} /> : ""}
        </div>
      </div>
    </div>
  );
}
