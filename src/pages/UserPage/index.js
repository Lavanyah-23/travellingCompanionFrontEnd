import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchOneUser } from "../../store/profile/actions";
import "./style.css";

const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch, id]);

  console.log("THis is user", user);

  return (
    <div className="User_Div">
      <div className="User_Page">
        <div className="User_Block">
          <h2 style={{ textAlign: "center" }}>UserDetails</h2>
          <p>
            <img alt={user.name} src={user.imageAvatar} width="200px" />{" "}
          </p>
          <p>My Username: {user.name}</p>
          <p>My Phone number: {user.phoneNumber}</p>
          <p>My date of birth: {user.dateOfBirth}</p>
          <p>My description: {user.description}</p>
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
        </div>
      </div>
    </div>
  );
};
export default UserPage;
