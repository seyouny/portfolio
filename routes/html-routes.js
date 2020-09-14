// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  app.get("/aboutme", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/aboutme.html"));
  });

  // blog route loads blog.html
  app.get("/project", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/project.html"));
  });
  app.get("/resume", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/resume.html"));
  });
 
};
