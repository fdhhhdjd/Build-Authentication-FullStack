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
    try {
      const user = await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      dispatch(RegisterSuccess(user));
      history.push("/");
    } catch (error) {
      if (error.response) {
        dispatch(RegisterFail(error.response.data.msg));
      }
    }
  };
};

const Register = async (e) => {
  e.preventDefault();
  try {
    await axios.post("http://localhost:5000/users", {
      name: name,
      email: email,
      password: password,
      confPassword: confPassword,
    });
    history.push("/");
  } catch (error) {
    if (error.response) {
      setMsg(error.response.data.msg);
    }
  }
};
