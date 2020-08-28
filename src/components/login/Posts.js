
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import * as ReactBootstrap from 'react-bootstrap';
import Confirm from './Confirm';

const Posts = ({ posts, loading }) => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Users Detail</h1>
        <Link className="btn btn-secondary" to="/AddUser">Add User</Link>
        <table class="table border shadow">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{post.username}</td>
                <td>{post.email}</td>
                <td>{post.password}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/User/${post.id}`}>
                    View
                  </Link>
                  <Link class="btn btn-outline-primary mr-2" to={`/EditUser/${post.id}`}>
                    Edit
                  </Link>
                  {/* <Link class="btn btn-danger" onClick={() => deleteUser(user.id)}>
                    Delete
                  </Link> */}
                  <Confirm
                    onConfirm={() => {
                        //alert('Confirmed');
                        return <Redirect to={deleteUser(post.id)} />
                    }}
                    body="Are you sure you want to delete this?"
                    confirmText="Confirm Delete"
                    title="Deleting User">
                    <button class="btn btn-danger">Delete</button>
                  </Confirm>
                  </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Posts;
