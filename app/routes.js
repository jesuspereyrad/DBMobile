module.exports = function(app) {
    require('../controllers/userController.js')(app);
    require('../controllers/propertyController.js')(app);

    var express = require('express');
    var apiRoutes = express.Router();
    var path = require("path");
    var multer = require('multer');


    app.get('/user/:id', findUserByID);
    app.get('/users', findAllUsers);
    app.get('/userLogin', loginUser);
    app.post('/user', addUser);
    app.delete('/users/:id', deleteUser);

    app.get('/properties', findAllProperties); //Find all products in database
    app.get('/property/:id', findPropertyByID); //Find one product in QuickBooks
    app.post('/property/', addProperty);
    app.delete('/property/:id', deleteProperty);
    app.delete('/properties', deleteAll);


}