import { apiUrl } from "../../config/constants";
import axios from "axios";

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
