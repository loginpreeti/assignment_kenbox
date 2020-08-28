import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useAlert } from 'react-alert';

const EditUser = () => {
  let history = useHistory();
  const alert = useAlert();
  const { id } = useParams();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const { username, email, password } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group row">
            <label className="form-control-lg text-center">Enter Username:</label>
            <input
              type="text"
              className="form-control-lg text-center mb-2"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group row">
            <label className="form-control-lg text-center">Enter Email:</label>
            <input
              type="email"
              className="form-control-lg text-center mb-2"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group row">
            <label className="form-control-lg text-center">Enter Password:</label>
            <input
              type="text"
              className="form-control-lg text-center mb-2"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block text-center"
            onClick={() => {alert.success('User has been successfully updated!')}}>Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
