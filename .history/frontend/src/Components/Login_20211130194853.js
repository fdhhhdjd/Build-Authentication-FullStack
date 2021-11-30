import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { LoginInitiate } from "../Redux/Action";
const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { email, password } = state;
  const { user, error } = useSelector((state) => state.data);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email & !password) {
      return toast.error("Enter Please Input");
    } else if (dispatch(LoginInitiate(email, password))) {
      setTimeout(() => {
        Navigate("/dashboard"), toast.success(user.data.msg);
      }, 2000);
    }
  };
  return (
    <>
      <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4-desktop">
                <form onSubmit={handleSubmit} className="box">
                  <p className="has-text-centered" style={{ color: "red" }}>
                    {error}
                  </p>
                  <div className="field mt-5">
                    <label className="label">Email or Username</label>
                    <div className="controls">
                      <input
                        type="text"
                        className="input"
                        placeholder="Username"
                        value={email}
                        name="email"
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
                        name="password"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field mt-5">
                    <button className="button is-success is-fullwidth">
                      Login
                    </button>
                    <Link to="/register">Register</Link>
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
