import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../imports/index";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router";
import { TokenUserInitiate } from "../Redux/Action";
const Dashboard = () => {
  const { tokenUser, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const refreshToken = async () => {
    const response = await axios.get("http://localhost:5000/token");
    setToken(response.data.accessToken);
  };
  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };
  useEffect(() => {
    dispatch(TokenUserInitiate());
    getUsers();
    refreshToken();
  }, []);
  if (tokenUser.status !== 200) {
    return Navigate("/");
  }
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
