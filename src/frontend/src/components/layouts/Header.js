import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../../actions/auth";

export class Header extends Component {
  static propType = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const non_auth_link = (
      <Fragment>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </Fragment>
    );

    const auth_link = (
      <Fragment>
        <li>
          <strong>{user ? user.username : ""}</strong>
        </li>
        <li>
          <button className="btn red" onClick={this.props.logout}>
            Logout
          </button>
        </li>
      </Fragment>
    );

    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <div className="container">
              <a href="#!" className="brand-logo">
                djreact
              </a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {isAuthenticated ? auth_link : non_auth_link}
                <li>
                  <a href="mobile.html">Mobile</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated ? auth_link : non_auth_link}
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
