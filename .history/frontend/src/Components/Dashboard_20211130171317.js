import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../imports/index";
import { ToastContainer, toast } from "react-toastify";
import { TokenUserInitiate } from "../Redux/Action";
const Dashboard = () => {
  const { tokenUser } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const getUsers = () => {};
  useEffect(() => {
    dispatch(TokenUserInitiate());
  }, []);
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h1>Welcome Back: {tokenUser ? tokenUser.name : "No User 🙄"}</h1>
        <button onClick={getUsers} className="button is-info">
          Get Users
        </button>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))} */}
            <tr>
              <td>tai</td>
              <td>tai</td>
              <td>tai</td>
              <td>tai</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
