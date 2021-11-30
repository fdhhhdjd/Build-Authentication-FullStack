import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../imports/index";
import axios from "axios";
import { TokenUserInitiate } from "../Redux/Action";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router";
const Dashboard = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const { errorToken } = useSelector((state) => state.data);
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const Navigate = useNavigate();
  console.log(users);
  const refreshToken = async () => {
    const response = await axios.get("http://localhost:5000/token");
    setToken(response.data.accessToken);
  };
  const axiosJWT = axios.create();

  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };
  if (errorToken) {
    Navigate("/");
  }
  useEffect(() => {
    dispatch(TokenUserInitiate());
    refreshToken();
    getUsers();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1>Welcome Back: {name}</h1>
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
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
