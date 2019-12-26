import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { login } from "../../actions/auth";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    const { username, password } = this.state;

    return (
      <div className="row section">
        <form className="col s12" onSubmit={this.onSubmit}>
          <h3>Login</h3>
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
            <input
              type="submit"
              className="btn green col s4 offset-s4"
              value="Submit"
            />
          </div>
          <div className="row">
            Don't have an account?
            <Link className="blue-text" to="/register">
              Register
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
