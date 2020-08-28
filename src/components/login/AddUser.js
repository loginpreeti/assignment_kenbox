import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useAlert } from 'react-alert';

const AddUser = () => {
  let history = useHistory();
  const alert = useAlert();
  const [user, setUser] = useState({
    username: ""
  });

  const [pwd, setPwd] = useState({
    password: ""
  });

  const [mail, setMail] = useState({
    email: ""
  });

  const { username } = user;
  const { email } = mail;
  const { password } = pwd;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setPwd({ ...pwd, [e.target.name]: e.target.value });
    setMail({ ...mail, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user, mail, pwd);
    history.push("/");
  };
  
  return (
    // <div className="container">
    //   <div className="w-50 mx-auto shadow p-5">
    //     <h2 className="text-center mb-4">Register User</h2>
    //     <form onSubmit={e => onSubmit(e)}>
    //       <div className="form-group row">
    //         <label className="form-control-lg text-center">Enter Username:</label>
    //         <input
    //           type="text"
    //           className="form-control-lg text-center mb-2"
    //           placeholder="Enter Your Username"
    //           name="username"
    //           value={username}
    //           onChange={e => onInputChange(e)}
    //         />
    //       </div>
    //       <div className="form-group row">
    //         <label className="form-control-lg text-center">Enter Email:</label>
    //         <input
    //           type="email"
    //           className="form-control-lg text-center mb-2"
    //           placeholder="Enter Your E-mail Address"
    //           name="email"
    //           value={email}
    //           onChange={e => onInputChange(e)}
    //         />
    //       </div>
    //       <div className="form-group row">
    //         <label className="form-control-lg text-center">Enter Password:</label>
    //         <input
    //           type="text"
    //           className="form-control-lg text-center mb-2"
    //           placeholder="Enter Password"
    //           name="password"
    //           value={password}
    //           onChange={e => onInputChange(e)}
    //         />
    //       </div>
    //       <button className="btn btn-primary btn-block text-center" 
    //         onClick={() => {alert.success('User has been successfully added!')}}>Register User</button>
    //     </form>
    //   </div>
    // </div>
 <div className="container">
<form>
<table className="table">
<tbody>
  <tr>
    <th scope="row">User Name</th>
    <td> <input
              type="text"
              className="form-control-lg text-center mb-2"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            /></td>
   </tr>
   <tr>
    <th scope="row">1</th>
    <td>Mark</td>
   </tr>
   <tr>
    <th scope="row">1</th>
    <td>Mark</td>
   </tr>
  
</tbody>
</table>
</form>
</div>  
  );
};

export default AddUser;
