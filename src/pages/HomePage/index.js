import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./traveltogether.jpg";
import "./style.css";

export default function HomePage() {
  return (
    <Jumbotron>
      <div className="HomePage">
        <div className="HomePageContainer">
          <div className="HomePageText">
            Find your Travelling Companion and explore the world together!
          </div>
          <Link to="/trips">
            <div
              className="HomePageBackGroundImage"
              style={{
                backgroundImage: `url(${logo})`,
                width: 1100,
                height: 630,
                borderRadius: 10,
                alignSelf: "center",
              }}
            >
              {" "}
            </div>
          </Link>
        </div>
      </div>
    </Jumbotron>
  );
}
