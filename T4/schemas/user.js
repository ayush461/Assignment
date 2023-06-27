// user.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  age: Number,
  city: { type: Schema.Types.ObjectId, ref: 'City' } // Reference to the City collection
});

const User = mongoose.model('User', userSchema);

module.exports = User;
