import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    re_password: ""
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password, re_password } = this.state;
    if (password !== re_password) {
      this.props.createMessage({
        passwordsNotMatch: "Password and retyped password do not match"
      });
    } else {
      const newUser = { username, email, password };
      this.props.register(newUser);
    }
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    const { username, email, password, re_password } = this.state;

    return (
      <div className="row section">
        <form className="col s12" onSubmit={this.onSubmit}>
          <h3>Register</h3>
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="Username"
                id="username"
                name="username"
                type="text"
                className="validate"
                onChange={this.onChange}
                value={username}
              />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="youremail@example.com"
                id="email"
                name="email"
                type="email"
                className="validate"
                onChange={this.onChange}
                value={email}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                className="validate"
                onChange={this.onChange}
                value={password}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="Re type password"
                id="re_password"
                name="re_password"
                type="password"
                className="validate"
                onChange={this.onChange}
                value={re_password}
              />
              <label htmlFor="re_password">Re type password</label>
            </div>
          </div>
          <div className="row">
            <input
              type="submit"
              className="btn green col s4 offset-s4"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, createMessage })(Register);
