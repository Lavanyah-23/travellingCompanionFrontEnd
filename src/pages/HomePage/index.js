import { Jumbotron } from "react-bootstrap";
import logo from "./traveltogether.jpg";
import "./style.css";
const HomePage = () => {
  return (
    <Jumbotron>
      <div className="HomePage">
        <div className="HomePageContainer">
          <div
            className="HomePageBackGroundImage"
            style={{
              backgroundImage: `url(${logo})`,
              width: 1100,
              height: 630,
              borderRadius: 20,
              alignSelf: "center",
            }}
          >
            {" "}
            {/* <img src={logo} alt="travel" /> */}
          </div>
          <div className="HomePageText">
            <p> Find your Companion and Explore world together</p>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};
export default HomePage;
