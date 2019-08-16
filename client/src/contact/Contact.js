    
import React, { Component } from "react";
import './contact.css'
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      email: "",
      errorsEmail: "",
      errorsMessage: "",
      errorsName: "",
      contactStatus: false
    };
  }
  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  handleSubmit = e => {
    e.preventDefault();
    let valid = true;
    if (this.state.name === "") {
      this.setState({ errorsName: "Name Field is Required" });
      valid = false;
    } else {
      this.setState({ errorsName: "" });
    }
    if (this.state.email === "") {
      this.setState({ errorsEmail: "Email Field is Required" });
      valid = false;
    } else {
      this.setState({ errorsEmail: "" });
    }
    if (!this.validateEmail(this.state.email)) {
      this.setState({ errorsEmail: "Your email is not valid" });
      valid = false;
    } else {
      this.setState({ errorsEmail: "" });
    }
    if (this.state.message < 15) {
      this.setState({
        errorsMessage:
          "Your message is not valid(Must be at least 15 characters)"
      });
      valid = false;
    } else {
      this.setState({ errorsMessage: "" });
    }
    if (valid) {
      const contactReq = {
        email: this.state.email,
        name: this.state.name,
        message: this.state.message
      };
      axios.post("/contact-me/email", contactReq).then(res => console.log(res));
      this.setState({ contactStatus: true });
    }
  };
  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    const { errorsEmail, errorsMessage, errorsName } = this.state;
    let content;
    if (this.state.contactStatus === false) {
      content = (
        <div className="contact-me" id="contact-me">
          {" "}
          <h2 className="contact-me-heading">Contact Me</h2>
          <div className="contact-me-form">
            <div className="contact-me-email">
              <h2 className="contact-me-email-heading">Email</h2>
              <input
                placeholder="Write your Email here!"
               className='contact-me-email-input'
                onChange={this.onChange}
                id="email"
              />
              {errorsEmail !== "" ? (
                <span className="error">{errorsEmail}</span>
              ) : null}
            </div>
            <div className="contact-me-name">
              <h2 className="contact-me-name-heading">Email</h2>
              <input
                placeholder="What's your name?"
               className='contact-me-name-input'
                onChange={this.onChange}
                id="name"
              />
              {errorsName !== "" ? (
                <span className="error">{errorsName}</span>
              ) : null}
            </div>
            <div className="contact-me-message">
              <h2 className="contact-me-message-heading">Message</h2>
              <input
                placeholder="Write your message here!"
               className='contact-me-message-input'
                onChange={this.onChange}
                id="message"
              />
              {errorsMessage !== "" ? (
                <span className="error">{errorsMessage}</span>
              ) : null}
            </div>
            <button
              color="primary"
              className="contact-me-submit"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>{" "}
        </div>
      );
    } else {
      content = (
        <div className="contact-me" id="contact-me">
          <h2 className="contact-me-post-message">
            Thanks For contacting me! I'll get back to you soon!
          </h2>
        </div>
      );
    }
    return content;
  }
}
export default Contact;