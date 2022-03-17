import { combineReducers } from "redux";
import appState from "./appState/reducer";
import profile from "./profile/reducer"
import trips from "./trips/reducer";
import user from "./user/reducer";

export default combineReducers({
  appState,
  profile,
  trips,
  user
});
