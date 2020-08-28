import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './components/login/style.scss';
import Login from './components/login/login';
import Register from './components/login/register';
import UserDetail from './components/login/UserDetail';
import User from './components/login/User';
import AddUser from './components/login/AddUser';
import EditUser from './components/login/EditUser';
import LoginForm from './components/login/LoginForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={UserDetail}/>
          <Route exact path="/User/:id" component={User}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Register" component={Register}/>
          <Route exact path="/AddUser" component={AddUser}/>
          <Route exact path="/EditUser/:id" component={EditUser}/>
          <Route exact path="/LoginForm" component={LoginForm}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
