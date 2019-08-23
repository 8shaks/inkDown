const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const keys = require("./config/keys");
const validateInput = require("./validation");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Node Mailer Config
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: keys.emailAdress,
    pass: keys.emailPassword
  }
});
//emails
const email = `
<div>
  <h4>Hi, name</h4>
  <br />
  <br />
  Thanks for the email!. We'll get back to you soon!
  <br />
  <br />
  Thanks,
  <br />
  inkDown
</div>
`;

//handle post reqs for contact through email
app.post("/contact-me/email", (req, res) => {
  console.log('yo')
  const { errors, isValid } = validateInput(req.body);
  if (!isValid) {
    console.log(errors)
    return res.status(400).json(errors);
  }
  //Email Config to send to potential client
  const mailOptionsToClient = {
    from: "inkDown Services",
    to: req.body.email,
    subject: "Thanks for contacting us!",
    //Email to Be sent
    html: email.replace(/name/g, req.body.name)
  };
  //Send Email to potential client
  transporter.sendMail(mailOptionsToClient, function(err, info) {
    //handle email errors
    if (err) console.log(err);
    else return true;
  });

  //email config to send to me
  const mailOptionsToMe = {
    from: "Shakiran Sathiyanathan",
    to: "8shak.s@gmail.com",
    subject: "New contact request",
    //Email to Be sent
    html: `<div>New Contact Request<br/><br/>Name:${
      req.body.name
    }<br/><br/>Email:${req.body.email}<br/><br/>Message:${
      req.body.message
    }</div>`
  };
  //Send Email to myself
  transporter.sendMail(mailOptionsToMe, function(err, info) {
    //handle email errors
    if (err) console.log(err);
    else return true;
  });
  res.json({ sucess: true });
});

//Server static assets if in production for front-end
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));