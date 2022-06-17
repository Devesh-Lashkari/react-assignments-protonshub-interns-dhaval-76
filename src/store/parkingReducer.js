export const initialState = {
  parkingSlots: [],
  totalSlots: 0,
  availableSlots: 0,
};

export const actionTypes = {
  DEFINED_PARKING_SPACE: "DEFINED_PARKING_SPACE",
  ADD_CAR: "ADD_CAR",
  REMOVE_CAR: "REMOVE_CAR",
};

const defaultParkingSlot = (id) => ({
  available: true,
  parkingSpaceId: id,
  joiningTime: "",
});

const parkingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DEFINED_PARKING_SPACE: {
      const totalParkingSpace = action.payload;

      const parkingSlots = new Array(totalParkingSpace)
        .fill(0)
        .map((_, idx) => ({
          ...defaultParkingSlot(idx),
        }));

      return {
        ...state,
        parkingSlots,
        totalSlots: totalParkingSpace,
        availableSlots: totalParkingSpace,
      };
    }

    case actionTypes.ADD_CAR: {
      const availableSpacesId = state.parkingSlots
        .filter((item) => item.available === true)
        .map((item) => item.parkingSpaceId);

      const randomNumber = Math.floor(Math.random() * availableSpacesId.length);

      const newParkingSlots = JSON.parse(JSON.stringify(state.parkingSlots));

      newParkingSlots[availableSpacesId[randomNumber]] = {
        available: false,
        parkingSpaceId:
          newParkingSlots[availableSpacesId[randomNumber]].parkingSpaceId,
        joiningTime: action.payload.joiningTime,
      };

      return {
        ...state,
        parkingSlots: newParkingSlots,
        availableSlots: state.availableSlots - 1,
      };
    }

    case actionTypes.REMOVE_CAR: {
      const newParkingSlots = JSON.parse(JSON.stringify(state.parkingSlots));

      newParkingSlots[action.payload] = defaultParkingSlot(action.payload);

      return {
        ...state,
        parkingSlots: newParkingSlots,
        availableSlots: state.availableSlots + 1,
      };
    }

    default:
      return state;
  }
};

export default parkingReducer;
