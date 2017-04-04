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
  rating: {type: Number},
  house: {type: Boolean},
  apartment: {type: Boolean},
  typeHouse: {type: Boolean},
  sizeHouse: {type: Number},
  bedroom: {type: Number},
  bathroom: {type: Number},
  email: {type: String},
  username: {type: String},
  houseName: {type: String},
  photos: type: String

}, {collection: 'property'});

module.exports = mongoose.model('property', propertySchema);