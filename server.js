var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var path = require("path");
//var routes = require("./controllers/sushi_controllers.js");



var app = express();
var port = process.env.PORT || 3000;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride("_method"));

//require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//app.use("/", routes);

db.sequelize.sync().then(function() {
	app.listen(port, function() {
		console.log("App listening on PORT " + port);
	});
});