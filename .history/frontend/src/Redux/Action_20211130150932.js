import axios from "axios";
import * as types from "./Actiontypes";
export const RegisterStart = () => ({
  type: types.REGISTER_START,
});
export const RegisterSuccess = (api) => ({
  type: types.REGISTER_SUCCESS,
  payload: api,
});
export const RegisterFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});
export const LoginStart = () => ({
  type: types.LOGIN_START,
});
export const LoginSuccess = (api) => ({
  type: types.LOGIN_SUCCESS,
  payload: api,
});
export const LoginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});
export const TokenUserStart = () => ({
  type: types.TOKEN_USER_START,
});
export const TokenUserSuccess = (api) => ({
  type: types.TOKEN_USER_SUCCESS,
  payload: api,
});
export const TokenUserFail = (error) => ({
  type: types.TOKEN_USER_FAIL,
  payload: error,
});

export const RegisterInitiate = (name, email, password, confPassword) => {
  return async function (dispatch) {
    dispatch(RegisterStart());
    try {
      const user = await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      dispatch(RegisterSuccess(user));
    } catch (error) {
      if (error.response) {
        dispatch(RegisterFail(error.response.data.msg));
      }
    }
  };
};
export const LoginInitiate = (email, password) => {
  return async function (dispatch) {
    dispatch(LoginStart());
    try {
      const user = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      dispatch(LoginSuccess(user));
    } catch (error) {
      if (error.response) {
        dispatch(LoginFail(error.response.data.msg));
      }
    }
  };
};
export const TokenUserInitiate = () => {
  return async function (dispatch) {
    dispatch(LoginStart());
    try {
      const user = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      dispatch(LoginSuccess(user));
    } catch (error) {
      if (error.response) {
        dispatch(LoginFail(error.response.data.msg));
      }
    }
  };
};
