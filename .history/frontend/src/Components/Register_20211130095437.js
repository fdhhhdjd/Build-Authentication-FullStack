import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterInitiate } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Toast } from "react-toastify/dist/components";
const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confPassword: "",
  };
  const [state, setState] = useState(initialState);
  const [msg, setMsg] = useState("");
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
    dispatch(RegisterInitiate(name, email, password, confPassword));
    toast.error("error");
  };
  if (user.status === 200) {
    Navigate("/");
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
                  <p className="has-text-centered">{msg && user.data.msg}</p>
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
