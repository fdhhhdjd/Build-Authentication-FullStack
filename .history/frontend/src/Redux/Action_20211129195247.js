import axios from "axios";
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

export const RegisterInitiate = (name, email, password, confPassword) => {
  return async function (dispatch) {
    const Navigate = useNavigate();
    dispatch(RegisterStart());
    axios
      .post(`http://localhost:5000/users`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      })
      .then(({ token }) => {
        // localStorage.setItem("token", token.data);
        dispatch(RegisterSuccess(token));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(RegisterFail(error.response.data.msg));
        }
      });
  };
};
