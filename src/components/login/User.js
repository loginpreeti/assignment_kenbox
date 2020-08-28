import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto shadow p-5">
        <div className="container py-4">
          <Link className="btn btn-primary" to="/">
            back to User Detail
          </Link>
          <h1 className="display-4">User Id: {id}</h1>
          <hr />
          <form>
            <div className="form-group row">
              <label className="form-control-lg text-center">Enter Username:</label>
              <label className="form-control-lg text-center">{user.username}</label>
            </div>
            <div className="form-group row">
              <label className="form-control-lg text-center">Enter Email:</label>
              <label className="form-control-lg text-center">{user.email}</label>
            </div>
            <div className="form-group row">
              <label className="form-control-lg text-center">Enter Password:</label>
              <label className="form-control-lg text-center">{user.password}</label>
              {/* <ul className="list-group w-50">
                <li className="list-group-item">user name: {user.username}</li>
                <li className="list-group-item">email: {user.email}</li>
                <li className="list-group-item">password: {user.password}</li>
              </ul> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
