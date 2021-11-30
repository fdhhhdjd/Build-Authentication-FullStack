import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterInitiate } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
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
  const { user } = useSelector((state) => state.data);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (!name) {
      return setMsg("Please Enter Register");
    } else if (!user) {
      dispatch(RegisterInitiate(name, email, password, confPassword));
      setTimeout(() => Navigate("/"), 3000);
    } else {
      Navigate("/register");
    }
  };
  return (
    <>
      <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
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
