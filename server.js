var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose'),
    cors = require('cors'),
    user = require('./model/userModel.js'),
    property = require('./model/PropertyModel.js');

app.use(bodyParser());
app.use(methodOverride());

var router = express.Router();

app.use(router);
// app.use(morgan);
require('./app/routes.js')(app);

//Conect to database
mongoose.connect("mongodb://localhost/housefinders", function(err, res) {
    if (err) {
        console.log('ERROR: connecting to Database. ' + err);
    } else
        console.log("Connected to the db");

    //Create the server and listen in the port 3000
    app.listen(3000, function() {
        console.log("Node server running on http://localhost:3000");
    });
});