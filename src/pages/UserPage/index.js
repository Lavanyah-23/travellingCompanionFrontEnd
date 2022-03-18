import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserPage = () => {
  return (
    <div>
      <h1>UserDetails</h1>

      <Button OnClick={Link} to={"/addtrip"}>
        Add a trip
      </Button>
    </div>
  );
};
export default UserPage;
