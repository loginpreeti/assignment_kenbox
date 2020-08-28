import React, { Component } from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "user1",
                       password: "user1"
        };
    }

    handleValue = (event) => {
        this.setState({ [event.target.name] : event.target.value })
        console.log(event.target.value);
    }

    handleSubmit = (event) => {
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div className="base-container">
                    <div className="header">Login</div>
                    <h1>Hello {this.state.username}</h1>
                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="username" value={this.state.username}
                                    onChange={this.handleValue}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password" value={this.state.password}
                                    onChange={this.handleValue}/>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="submit" className="btn">Login</button>
                    </div>
                </div>
            </form>
        );
    }
}