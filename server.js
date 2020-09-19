const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
var path = require("path");

var PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(PORT, function () {

  console.log("Server listening on: http://localhost:" + PORT);
});