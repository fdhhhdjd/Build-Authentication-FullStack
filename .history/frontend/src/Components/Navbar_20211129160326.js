import React from "react";

const Navbar = () => {
  const HandleLogout = () => {};
  return (
    <>
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://profile-forme.surge.sh/">
              <img
                src="https://profile-forme.surge.sh/static/media/avatar.0870128b.jpg"
                width="112"
                height="28"
                alt="logo"
              />
            </a>

            <a
              href="/"
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a href="/" className="navbar-item">
                Home
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button onClick={HandleLogout} className="button is-light">
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
