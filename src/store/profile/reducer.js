/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    oneUser: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "profile/getOneUser":
            return {
                ...state,
                oneUser: { ...state.oneUser, ...action.payload },
            };

        default:
            return state;
    }
};
