import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterInitiate } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confPassword: "",
  };
  const [state, setState] = useState(initialState);
  let dispatch = useDispatch();
  const Navigate = useNavigate();
  const { name, email, password, confPassword } = state;
  const { user, error } = useSelector((state) => state.data);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (!name && !email && !password && !confPassword) {
      return toast.error("Enter Please Input");
    } else if (password !== confPassword) {
      return toast.error("Confirm is incorrect");
    }
    dispatch(RegisterInitiate(name, email, password, confPassword));
  };

  if (user.status === 200) {
    setTimeout(() => Navigate("/"), 2000);
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
                <form onSubmit={handleRegister} className="box">
                  <p
                    className="has-text-centered"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    {error}
                  </p>
                  <div className="field mt-5">
                    <label className="label">Name</label>
                    <div className="controls">
                      <input
                        type="text"
                        className="input"
                        placeholder="Name"
                        value={name}
                        name="name"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field mt-5">
                    <label className="label">Email</label>
                    <div className="controls">
                      <input
                        type="text"
                        className="input"
                        placeholder="Email"
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
                    <label className="label">Confirm Password</label>
                    <div className="controls">
                      <input
                        type="password"
                        className="input"
                        placeholder="******"
                        value={confPassword}
                        name="confPassword"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field mt-5">
                    <button className="button is-success is-fullwidth">
                      Register
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

export default Register;
