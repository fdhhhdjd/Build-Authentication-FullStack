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
  return async function (dispatch) {
    dispatch(RegisterStart());
    axios
      .post(`http://localhost:5000/users`, name, email, password, confPassword)
      .then((token) => {
        localStorage.setItem("token", token.data);
      });
  };
};
// export const RegisterInitiate = (name, email, password, confPassword) => {
//   return async function (dispatch) {
//     dispatch(RegisterStart());
//     try {
//       const dataUser = await axios.post("http://localhost:5000/users", {
//         name: name,
//         email: email,
//         password: password,
//         confPassword: confPassword,
//       });
//       dispatch(RegisterSuccess(dataUser));
//     } catch (error) {
//       if (error.response) {
//         dispatch(RegisterFail(error.response.data.msg));
//       }
//     }
//   };
// };
