import * as types from "./Actiontypes";
const initialState = {
  product: [],
  loading: false,
  error: null,
};
const CartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
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
