    
import React, { Component } from "react";
import contactStyles from '../styles/contact.module.css'
import axios from "axios";
import Layout from '../components/layout'
import SEO from '../components/seo'
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
      axios.post("/contact-me/email", contactReq).then(res => console.log(res)).catch((err) => {
        console.log(err)})
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
        <div className={contactStyles.page} id="contact-me">
          {" "}
          <h1 className={contactStyles.header}><span>Contact</span></h1>
          <div className={contactStyles.container}>
          <div className={contactStyles.caption}>Send us a message below with our contact form. Here's to building a great, benifical relationship for both of us!</div>
          <div className={contactStyles.form}>
            <div className={contactStyles.input}>
              <input
                placeholder="Email"
               className={contactStyles.input_box}
                onChange={this.onChange}
                id="email"
              />
              {errorsEmail !== "" ? (
                <span className={contactStyles.error}>{errorsEmail}</span>
              ) : null}
            </div>
            <div className={contactStyles.input}>
              <input
                placeholder="Name"
                className={contactStyles.input_box}
                onChange={this.onChange}
                id="name"
              />
              {errorsName !== "" ? (
                <span className={contactStyles.error}>{errorsName}</span>
              ) : null}
            </div>
            <div className={contactStyles.input}>
              <textarea
                placeholder="Message"
                className={contactStyles.input_message_box}
                onChange={this.onChange}
                id="message"
              />
              {errorsMessage !== "" ? (
                <span className={contactStyles.error}>{errorsMessage}</span>
              ) : null}
              
            </div>
            <div className={contactStyles.submit}>
            <button
              color="primary"
             
              onClick={this.handleSubmit}
            >
              Submit
            </button>
            </div>
            </div>
          </div>{" "}
        </div>
      );
    } else {
      content = (
        <div className={contactStyles.page} id="contact-me">
          <div className={contactStyles.container}> <div className={contactStyles.caption}>Thanks for contacting us, we'll get back to you as soon as possible. <br/><b>“Growth is never by mere chance; it is the result of forces working together.”</b></div></div>
        </div>
      );
    }
    return <Layout> <SEO title='Contact' description='A digital marketing agency focused on delivering websites, graphics, logos, and videos that provide results for our partners. Want to get in touch? Contact us through our form!'/>{content}</Layout>;
  }
}
export default Contact;