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

export const RegisterInitiate = (name, email, password, confPassword) => {
  return function (dispatch) {
    dispatch(RegisterStart());
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
};
