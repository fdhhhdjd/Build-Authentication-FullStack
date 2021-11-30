import axios from "axios";
import * as types from "./Actiontypes";
import { toast } from "react-toastify";
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
      dispatch(RegisterSuccess(user), toast.success(user.data.msg));
    } catch (error) {
      if (error.response) {
        dispatch(RegisterFail(error.response.data.msg));
      }
    }
  };
};
