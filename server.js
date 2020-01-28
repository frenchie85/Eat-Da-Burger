// // Pull in required dependencies
// var express = require('express');
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
​
// var port = process.env.PORT || 3000;
​
// var app = express();
​
// // Serve static content for the app from the 'public' directory
// app.use(express.static(process.cwd() + '/public'));
​
// app.use(bodyParser.urlencoded({ extended: false }));
​
// // Override with POST having ?_method=DELETE
// app.use(methodOverride('_method'));
​
// // Set Handlebars as the view engine
// var exphbs = require('express-handlebars');
​
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');
​
// // Import routes and give the server access to them
// var routes = require('./controllers/burgers_controller.js');
​
// app.use('/', routes);
​
// app.listen(port);
​
​
///////////////////// Your code is above ==///// Compare and contrast to see the issues. 
// Express also handles the body parsing, so you don't need 'var bodyParser = require('body-parser');' or that methodoverride function.
​
var express = require("express");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
​
var app = express();
​
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(express.static("./"));
​
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
​
// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
​
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
​
app.use(routes);
​
// Start our server so that it can begin listening to client requests.
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});