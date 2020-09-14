// this is going to require express 
var express = require("express");
var exphbs = require("express-handlebars");
var twilio = require('./twilio')
const dotenv = require('dotenv');
// this sets up the express port .. i chose port # 8080
var app = express();
var PORT = process.env.PORT || 8080;

// still working on this .. this needs to be redirected to a folder 
// the folder needs to have .js files in it
// var db = require("./models");

// this sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// static directory 
app.use(express.static("public"));

// requiring routes .. 
// require("./** folder name ** / ** file name ** )(app); // facebook
// require("./** folder name ** / ** file name ** )(app); // google
// require("./** folder name ** / ** files name **)(app); // twitter
require("./routes/html-routes")(app);

const userDatabase = [];

// Create user endpoint
app.post('/resume', (req, res) => {
  console.log(req.body)
  const { phone } = req.body;
  const user = {
    phone
  };
  console.log(user.phone.phone)

  userDatabase.push(user);

  const welcomeMessage = "Stacey is a recent graduate from UC Berkeley Extension's Full Stack Bootcamp. Her skills include Javascript, React.js, Node.js, MySQL, HTML/CSS, Python, and a strong passion for creating a greener environment.";

  twilio(user.phone.phone, welcomeMessage);

  res.status(201).send({
    message: 'Account created successfully, kindly check your phone to activate your account!',
    data: user
  })
});
// syncing the sequelize models and then starting the express app

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
