    
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
          <h1 className='contact-me-header'><span>Contact</span></h1>
          <div className='contact-me-caption'>Send us a message below with our contact form. Here's to building a great, benifical relationship for both of us!</div>
          <img src={require('./toast.jpg')}alt='toast to business'/>
          <div className="contact-me-form">
            <div className="contact-me-input">
              <input
                placeholder="Email"
               className='contact-me-input-box'
                onChange={this.onChange}
                id="email"
              />
              {errorsEmail !== "" ? (
                <span className="error">{errorsEmail}</span>
              ) : null}
            </div>
            <div className="contact-me-input">
              <input
                placeholder="Name"
               className='contact-me-input-box'
                onChange={this.onChange}
                id="name"
              />
              {errorsName !== "" ? (
                <span className="error">{errorsName}</span>
              ) : null}
            </div>
            <div className="contact-me-input">
              <input
                placeholder="Message"
               className='contact-me-input-message-box'
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