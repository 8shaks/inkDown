const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.message = !isEmpty(data.message) ? data.message : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is not valid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }
  if (!Validator.isLength(data.message, { min: 15, max: 200 })) {
    errors.message = "Passowrd must be between 15 and 200 characters";
  }
  if (Validator.isEmpty(data.message)) {
    errors.message = "Message is required";
  }
  return {
    errors,
    isValid: isEmpty(errors) ? true : false
  };
};