const mongoose = require("mongoose");

const DebateSchema = new mongoose.Schema({
  uname: {
    type : String,
    required : true,
  },
  email: {
    type : String,
    required : true,
    unique : true,
  },
  number: {
    type : Number,
    required : true,
    unique : true,
  },
  dept: {
    type : String,
    required : true,
  },
  uid: {
    type : Number,
    required : true,
  },
  year: {
    type : Number,
    required : true,
    max : 4,
    min : 2,
  },
  choice : {
    type : String,
    required : true,
  }
});

const Debate = mongoose.model('debate', DebateSchema)

module.exports = Debate
