import axios from "axios";
import * as types from "./Actiontypes";
export const FetchAllStart = () => ({
  type: types.REGISTER_START,
});
export const FetchAllSuccess = (api) => ({
  type: types.REGISTER_SUCCESS,
  payload: api,
});
export const FetchAllFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

export const RegisterInitiate = (name, email, password) => {
  return function (dispatch) {};
};
