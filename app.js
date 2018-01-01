var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var friends = ["tony", "jabecka", "jar jar", "Hessica", "Heffica"];

app.get("/", function(req, res){
	res.render("home");
});

app.get("/friends", function(req, res){
	res.render("friends", {friends: friends});
})


app.post("/addfriend", function(req, res) {
	var newfriend = req.body.newfriend
	friends.push(newfriend);
	res.redirect("friends");
})

app.listen(3000, function() {
	console.log("Serving app on port 3000");
})