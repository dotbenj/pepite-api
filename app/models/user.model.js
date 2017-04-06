//Get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
  firstname: String,
  lastname: String,
  email: String,
  type: String,
  _validator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  password: String,
  salt: String,
}));
