const express = require("express");
const mongoose= require("mongoose");
const logger = require("morgan")

const PORT = process.env.PORT || 8080;

const app = express();
app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout"), 
{ useNewUrlParser: true, useFindAndModify: false}

var apiRoute = (require("./routes/api-routes.js"))
var htmlRoute = (require("./routes/html-routes.js"))
app.use(apiRoute)
app.use(htmlRoute)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});