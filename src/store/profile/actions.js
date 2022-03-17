import axios from "axios";
import { apiUrl } from "../../config/constants";

export function oneUserFetched(user) {
    return {
        type: "profile/getOneUser",
        payload: user,
    };
}

export const fetchOneUser = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get(`${apiUrl}/users/${id}`);
            console.log("response", response.data);
            dispatch(oneUserFetched(response.data));
        } catch (e) {
            console.log(e.message);
        }
    };
};
