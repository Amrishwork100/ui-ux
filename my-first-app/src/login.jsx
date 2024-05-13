import { event } from 'jquery';
import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            otp: "",
            message: ""
        }
    }

    render() {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className='text-center'>
                            {this.state.message}
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input type="email" className="form-control mt-1" placeholder="Enter email" value={this.state.email}
                                onChange={(event) => { this.setState({ email: event.target.value }) }} />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input type="password" className="form-control mt-1" placeholder="Enter password" value={this.state.password}
                                onChange={(event) => { this.setState({ password: event.target.value }) }} />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-warning " onClick={this.onLoginClick}>Submit</button>
                        </div>
                        <p className="forgot-password text-right mt-2">Forgot <a href="#">password?</a></p>
                    </div>
                </form>
            </div>
        );
    }

    onLoginClick = async () => {
        var user = {
            email: this.state.email,
            password: this.state.password
        }
        var response = await fetch("http://localhost:8080/user/v1/api/login", {
            method: "POST", body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json"
            }
        })
        var body = await response.json();
        if (body.length > 0) {
            this.setState({ message: (< span className='text-success'> Succesfully login</span >) });

        } else {
            this.setState({ message: (< span className='text-danger'> Invalid login! please try again</span >) });
        }
    }
}






export default Login;