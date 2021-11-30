import axios from "axios";
import * as types from "./Actiontypes";
import jwt_decode from "jwt-decode"; // giai ma ma hoa tai khoan user tu nodejs
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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
  const Navigate = useNavigate();
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
const logoutStart = () => ({
  type: types.LOGOUT_START,
});
const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});
const logoutError = (error) => ({
  type: types.LOGOUT_FAIL,
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
      dispatch(RegisterSuccess(user), toast.success("Register Success !!"));
    } catch (error) {
      if (error.response) {
        dispatch(
          RegisterFail(error.response.data.msg),
          toast.error(error.response.data.msg)
        );
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
      dispatch(
        LoginSuccess(user),
        toast.success("Login Success !!")
        // setTimeout(() => {
        //   Navigate("/dashboard");
        // }, 2000)
      );
    } catch (error) {
      if (error.response) {
        dispatch(
          LoginFail(error.response.data.msg),
          toast.error(error.response.data.msg)
        );
      }
    }
  };
};
export const TokenUserInitiate = () => {
  return async function (dispatch) {
    dispatch(TokenUserStart());
    try {
      const user = await axios.get("http://localhost:5000/token");
      const token = user.data.accessToken;
      const decoded = jwt_decode(token);
      dispatch(TokenUserSuccess(decoded));
    } catch (error) {
      if (error.response) {
        dispatch(TokenUserFail(error.response));
      }
    }
  };
};

export const LogoutInitiate = () => {
  return async function (dispatch) {
    dispatch(logoutStart());
    try {
      const user = await axios.delete("http://localhost:5000/logout");
      dispatch(logoutSuccess(user), toast.success("Logout Success !!"));
    } catch (error) {
      dispatch(logoutError(error), toast.success(error));
    }
  };
};
