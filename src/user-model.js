const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  // __v: Number,
  // _id: String
});

module.exports = mongoose.model("User", userSchema)