var user = require('../model/userModel.js');


module.exports = function(app) {

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
	    user.findOne({username: req.body.username}, function(err, current) {
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