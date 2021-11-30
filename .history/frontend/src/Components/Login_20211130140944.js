import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { LoginInitiate } from "../Redux/Action";
const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [state, setState] = useState(initialState);
  const { email, password } = state;
  const { user, error } = useSelector((state) => state.data);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email && !password && !confPassword) {
      return toast.error("Enter Please Input");
    } else if (password !== confPassword) {
      return toast.error("Confirm is incorrect");
    }
    dispatch(LoginInitiate(email, password));
  };
  if (user.status === 200) {
    toast.success(user.data.msg);
  }
  return (
    <>
      <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
          <ToastContainer position="top-center" />
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4-desktop">
                <form onSubmit={handleSubmit} className="box">
                  <p className="has-text-centered">Login</p>
                  <div className="field mt-5">
                    <label className="label">Email or Username</label>
                    <div className="controls">
                      <input
                        type="text"
                        className="input"
                        placeholder="Username"
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field mt-5">
                    <label className="label">Password</label>
                    <div className="controls">
                      <input
                        type="password"
                        className="input"
                        placeholder="******"
                        value={password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field mt-5">
                    <button className="button is-success is-fullwidth">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
