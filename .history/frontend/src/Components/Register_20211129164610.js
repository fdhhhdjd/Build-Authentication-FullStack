import React, { useState } from "react";
let dispatch = useDispatch();
const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confPassword: "",
  };
  const [state, setState] = useState(initialState);
  let dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const { name, email, password, confPassword } = state;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleRegister = (e) => {
    RegisterInitiate;
  };
  return (
    <>
      <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4-desktop">
                <form onSubmit={HandleRegister} className="box">
                  <p className="has-text-centered">{msg}</p>
                  <div className="field mt-5">
                    <label className="label">Name</label>
                    <div className="controls">
                      <input
                        type="text"
                        className="input"
                        placeholder="Name"
                        value={name}
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
                    <label className="label">Confirm Password</label>
                    <div className="controls">
                      <input
                        type="password"
                        className="input"
                        placeholder="******"
                        value={confPassword}
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
