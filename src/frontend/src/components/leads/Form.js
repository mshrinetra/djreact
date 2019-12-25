import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="row section">
        <form className="col s12" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="Full Name"
                id="name"
                name="name"
                type="text"
                className="validate"
                onChange={this.onChange}
                value={name}
              />
              <label htmlFor="name">Name</label>
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
              <textarea
                placeholder="Lead's Message"
                id="message"
                name="message"
                type="text"
                className="materialize-textarea"
                onChange={this.onChange}
                value={message}
              ></textarea>
              <label htmlFor="message">Message</label>
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

export default connect(null, { addLead })(Form);
