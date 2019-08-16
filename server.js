// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// Routes
// const questionaire = require("./routes/api/questionaire");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Routes
// app.use("/api/questionaire", questionaire);

// Server Static Assets if in Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
