import * as types from "./Actiontypes";
const initialState = {
  user: [],
  loading: false,
  error: null,
  tokenUser: [],
  errorToken: null,
};
const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.TOKEN_USER_START:
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        register: payload,
      };
    case types.TOKEN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        tokenUser: payload,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: [],
        tokenUser: [],
      };
    case types.REGISTER_FAIL:
    case types.LOGIN_FAIL:

    case types.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case types.TOKEN_USER_FAIL:
      return {
        ...state,
        loading: false,
        errorToken: payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
