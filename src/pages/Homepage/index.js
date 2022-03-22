import { Jumbotron } from "react-bootstrap";
import logo from "./traveltogether.jpg";
import "./style.css";


const HomePage = () => {
  return (
    <Jumbotron>
      <div className="HomePage">
        <div className="HomePageContainer">
          <div className="HomePageText">
            <p> Find your Travelling Companion and explore the world together!</p>
          </div>
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
        </div>
      </div>
    </Jumbotron>
  );
};

export default HomePage;
