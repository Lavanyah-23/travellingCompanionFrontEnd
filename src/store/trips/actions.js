import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import { selectUser } from "../user/selectors";
//FETCH ALL TRIPS FOR HOMEPAGE
export function tripsFetched(trips) {
  return {
    type: "trips/getAlltrips",
    payload: trips,
  };
}

export const fetchTrips = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/trips`);

      dispatch(tripsFetched(response.data));
      // console.log("This is the response", response)
    } catch (e) {
      console.log(e.message);
    }
  };
};

export function oneTripFetched(trip) {
  return {
    type: "trips/getOneTrip",
    payload: trip,
  };
}

export const fetchUsersOneTrip = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/trips/${id}`);

      dispatch(oneTripFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export function commentPosted(comment) {
  return {
    type: "trips/postComment",
    payload: comment,
  };
}

export function postComment(name, comment, id) {
  return async function thunk(dispatch, getState) {
    try {
      const token = selectToken(getState());
      const user = selectUser(getState());

      if (token === null) return;

      const response = await axios.post(
        `${apiUrl}/comments`,
        {
          name: name,
          comment: comment,
          tripId: id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(commentPosted({ comment: response.data, user: user }));
      // console.log("what is the response", response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

export function postTrip(
  startingDate,
  endDate,
  description,
  title,
  image,
  country,
  maximumTravelers
) {
  return async function thunk(dispatch, getState) {
    try {
      const token = selectToken(getState());
      // const user = selectUser(getState())

      if (token === null) return;

      const response = await axios.post(
        `${apiUrl}/trips`,
        {
          title: title,
          description: description,
          image: image,
          country: country,
          maximumTravelers: maximumTravelers,
          endDate: endDate,
          startingDate: startingDate,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export function addNewTraveler(traveler) {
    return {
        type: "add/traveler",
        payload: traveler,
    };
};

export const deleteTraveler = (traveler) => {
    return {
        type: "delete/traveler",
        payload: traveler,
    };
};

export function changeTraveler(id) {
    return async function thunk(dispatch) {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`${apiUrl}/auth/me`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await axios.patch(
                `${apiUrl}/travelers/${id}`,
                {},
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            if (data.data.id) {
                dispatch(addNewTraveler(data.data));
            } else {
                dispatch(deleteTraveler(response.data));
            }
            console.log("This is the response", data)
        } catch (error) {
            console.log(error.message);
        }
    };
}