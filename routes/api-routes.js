var db = require("../models");

module.exports = function(app) {

	app.get("/", function(req, res) {
		db.Sushi.findAll({attributes: ["id", "sushi_name", "devoured", "date"]}).then(function(data) {
			res.render("index", {sushi: data});
		});
	});

	app.post("/api/sushi", function(req, res) {
		db.Sushi.create({
			sushi_name: req.body
		}).then(function(data) {
			res.redirect("/");
		});
	});


}

