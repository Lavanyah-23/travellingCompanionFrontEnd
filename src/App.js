import React, { useEffect } from "react";
import "./App.css";
import io from "socket.io-client";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import TripList from "./pages/TripList";
import TripDetails from "./pages/TripDetails";
import UserPage from "./pages/UserPage";
import AddTrip from "./pages/AddTrip";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { Jumbotron } from "react-bootstrap";

const socket = io.connect("http://localhost:4001");

const Home = () => (
  <Jumbotron>
    <h1>Home</h1>
  </Jumbotron>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/trips" element={<TripList />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trips/:id" element={<TripDetails />} />
        <Route path="/userpage/:id" element={<UserPage />} />
        <Route path="/addtrip" element={<AddTrip />} />
      </Routes>
    </div>
  );
}

export default App;
