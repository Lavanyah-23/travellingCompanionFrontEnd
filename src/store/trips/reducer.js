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

    default:
      return state;
  }
};