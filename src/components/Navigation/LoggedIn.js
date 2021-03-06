import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import { Link, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <Link to={`/userpage/${user.id}`}>
        <Nav.Item style={{ padding: ".5rem 6rem", color: "white" }}>
          Hi {user.email}, go to userpage
        </Nav.Item>
      </Link>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
