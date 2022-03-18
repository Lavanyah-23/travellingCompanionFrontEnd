const initialState = {
  allTrips: [],
  oneTrip: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "trips/getAlltrips":
      return {
        ...state,
        allTrips: [...action.payload],
      };

    case "trips/getOneTrip":
      return {
        ...state,
        oneTrip: action.payload,
      };


    case "trips/postComment":

      const { comment, user } = action.payload

      comment.user = user

      return {
        ...state,
        oneTrip: {
          ...state.oneTrip,
          comments: [...state.oneTrip.comments, comment]
        }
      };

    default:
      return state;
  }
};

