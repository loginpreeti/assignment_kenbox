import React from 'react';
import InputField from './InputField';
import { connect } from 'react-redux';

function LoginForm(props) {
  console.log(props);
  const inputRefs = React.useRef([
    React.createRef(), React.createRef()
  ]);

  const [data, setData] = React.useState({});

  const handleChange = (name, value) => {
    setData(prev => ({ ...prev, [name]: value }))
  }

  const submitForm = (e) => {
    e.preventDefault();

    let isValid = true;

    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate()
      console.log(valid)
      if (!valid) {
        isValid = false
      }
    }

    if (!isValid) {
      return
    }

    console.log("Logged In");
    
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <form onSubmit={submitForm} className="form">
          <h1>Login Form</h1>
          <InputField
            ref={inputRefs.current[0]}
            name="username"
            label="Username*:"
            placeholder={props.username}
            onChange={handleChange}
            validation={"required|min:6|max:12"}
          />
          <InputField
            ref={inputRefs.current[1]}
            name="password"
            label="Password*:"
            placeholder={props.password}
            validation="required|min:6"
            onChange={handleChange}
          />
          <button onClick={()=>{props.changePassword("456")}}>Change Password</button>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return  {
    username: state.username,
    password: state.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    changePassword: (pwd) => {dispatch({type:'CHANGE_PASSWORD', payload:pwd})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginForm);
