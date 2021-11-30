import * as types from "./Actiontypes";
const initialState = {
  user: [],
  loading: false,
  error: null,
};
const CartsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default CartsReducer;
