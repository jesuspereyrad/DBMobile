var mongoose = require('mongoose');


//User Model
var propertySchema = new mongoose.Schema({
  description:    { type: String },
  type:     { type: String },
  condition:  { type: String },
  price:    {type: Number},
  address: {type: String},
  latitude: {type: Number},
  longitude: {type: Number},
  owner: {type: String},
  telephone: {type: String},
  rating: {type: Number}

}, {collection: 'property'});

module.exports = mongoose.model('property', propertySchema);