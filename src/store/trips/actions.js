import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import thunk from "redux-thunk";
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
            const user = selectUser(getState())

            if (token === null) return;

            const response = await axios.post(
                `${apiUrl}/comments`,
                {
                    name: name,
                    comment: comment,
                    tripId: id
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
