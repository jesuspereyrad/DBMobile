var user = require('../model/userModel.js');


module.exports = function(app) {


	 //GET - Return all property in the DB
	findAllUsers = function(req, res) {
	    user.find(function(err, current) {
	      if (err){
	        res.status(500).send("Error property empty");
	      }
	      else {
	        console.log('GET /property');
	        res.status(200).json(current);
	      }
	    });
  	};

	loginUser = function(req, res) {
		console.log(req.body);
	    user.findOne({email: req.body.email}, function(err, current) {
			if(err) {
				res.status(404).send("User not found");
			}
			else {
				console.log("hola");
				if (current.password == req.body.password) {
					res.status(200).json(current);
				}
				else
					res.status(500).send("Incorrect Password");
			}
		});
	}

	 //GET - Return a user with specified ID
	findUserByID = function(req, res) {
	    console.log(req.params.id);
	    user.findById(req.params.id, function(err, current) {
	      if (err) {
	        return res.status(404).send("User not Found");
	      }
	      else {
	        console.log('GET /users/' + req.params.id);
	        res.status(200).json(current);
	      }
	    });
	 };

	addUser = function(req, res) {
	    user.findOne({email: req.body.email}, function(err, current) {
	      if(err){
	        res.status(500).send("error with the application");
	      }
	      if (current != null){
	        res.status(503).send("Error user exist");
	      }
	      else {
	        console.log('POST');
	        var newUserObj = new user({
	          name: req.body.name,
	          password: req.body.password,
	          email: req.body.email
	        });
	        newUserObj.save(function(err, resultObj) {
	          if (err){
	            return res.status(500).send("User not create");
	          }
	          else{
	            res.status(200).json(resultObj);
	          }
	        });
	      };
	    });
	  };

	//DELETE - Delete a user with specified ID
	 deleteUser = function(req, res) {
	    user.findByIdAndRemove(req.params.id, function(err) {
	        if (err){
	            res.status(404).send("User not found");
	        }
			else { 
            	res.status(success.ok).send("User with the id " + req.params.id + " Deleted");
	        }
	    })
	};
};