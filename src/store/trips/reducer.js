const initialState = {
  allTrips: [],
  oneTrip: {},
  travelers: [],
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

    case "add/traveler": {
      return {
        ...state,
        travelers: [...state.travelers, action.payload],
      };
    }

    case "delete/traveler": {
      const newArray = state.travelers.filter((travelers) => {
        return travelers.id !== action.payload.id;
      });

      return {
        ...state,
        travelers: [...newArray],
      };
    }

    default:
      return state;
  }
};

