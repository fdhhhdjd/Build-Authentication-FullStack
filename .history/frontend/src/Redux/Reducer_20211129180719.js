import * as types from "./Actiontypes";
const initialState = {
  user: [],
  loading: false,
  error: null,
};
const UserReducer = (state = initialState, action) => {
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
        loading: false,
      };
    default:
      return state;
  }
};
export default UserReducer;
