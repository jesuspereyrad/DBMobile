var mongoose = require('mongoose');


//User Model
var userSchema = new mongoose.Schema({
  name:    { type: String },
  email:     { type: String },
  password:  { type: String },
}, {collection: 'user'});

module.exports = mongoose.model('user', userSchema);