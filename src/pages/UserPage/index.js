import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const UserPage = () => {
  return (
    <div className="User_Div">
      <h1> style={{ textAlign: "center" }} UserDetails</h1>

      <Button OnClick={Link} to={"/addtrip"}>
        Add a trip
      </Button>
    </div>
  );
};
export default UserPage;
