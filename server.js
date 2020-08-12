const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 8080;


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI = process.env.MONGOATLAS_URI 
  ||  mongoose.connect("mongodb://localhost/Workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// mongodb+srv://andrewWestgard:<password>@cluster0.m1fb1.mongodb.net/<dbname>?retryWrites=true&w=majority
// routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});