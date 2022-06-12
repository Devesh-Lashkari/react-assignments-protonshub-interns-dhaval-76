export const initialState = {
  asteriodName: null,
  nasa_jpl_url: null,
  is_potentially_hazardous_asteroid: null,
};

export const actionTypes = {
  SET_ASTERIOD_DATA: "SET_ASTERIOD_DATA",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_ASTERIOD_DATA:
      return {
        ...state,
        asteriodName: action.payload.name,
        nasa_jpl_url: action.payload.nasa_jpl_url,
        is_potentially_hazardous_asteroid:
          action.payload.is_potentially_hazardous_asteroid,
      };

    default:
      return state;
  }
};

export default reducer;
