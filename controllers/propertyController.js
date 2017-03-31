var property = require('../model/propertyModel.js');


module.exports = function(app) {

	  //GET - Return all property in the DB
	findAllProperties = function(req, res) {
	    property.find(function(err, current) {
	      if (err){
	        res.status(500).send("Error property empty");
	      }
	      else {
	        console.log('GET /property');
	        res.status(200).json(current);
	      }
	    });
  	};

	 //GET - Return a property with specified ID
	findPropertyByID = function(req, res) {
	    console.log(req.params.id);
	    property.findById(req.params.id, function(err, current) {
	      if (err) {
	        return res.status(404).send("property not Found");
	      }
	      else {
	        console.log('GET /property/' + req.params.id);
	        res.status(200).json(current);
	      }
    });
	};

	addProperty = function(req, res) {
			    console.log(req.body);

	        var newPropertyObj = new property({
	          description: req.body.description,
	          price: req.body.price,
	          owner: req.body.owner,
	          type: req.body.type,
	          condition: req.body.condition,
	          address: req.body.address,
	          latitude: req.body.latitude,
	          longitude: req.body.longitude,
	          telephone: req.body.telephone,
	          rating: req.body.rating,
	          apartment: req.body.apartment,
	          house: req.body.house,
	          typeHouse: req.body.typeHouse,
	          bedroom: req.body.bedroom,
	          bathroom: req.body.bathroom,
	          email: req.body.email,
	          username: req.body.email,
	          sizeHouse: req.body.sizeHouse,
	          houseName: req.body.houseName;
	        });
	       	console.log('POST');
	       	console.log(newPropertyObj);
	        newPropertyObj.save(function(err, resultObj) {
	          if (err){
	            return res.status(500).send("Property not create");
	          }
	          else{
	            res.status(200).json(resultObj);
	          }
	        });
	    };

	//DELETE - Delete a user with specified ID
	deleteProperty = function(req, res) {
	    property.findByIdAndRemove(req.params.id, function(err) {
	        if (err){
	            res.status(404).send("Property not found");
	        }
			else { 
            	res.status(200).send("Property with the id " + req.params.id + " Deleted");
	        }
	    })
	};

	deleteAll = function(req, res) {
		property.remove({}, function(err, numberRemoved) {
			console.log("inside remove call back" + numberRemoved);
		});
	}

};