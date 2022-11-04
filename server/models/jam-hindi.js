const mongoose = require("mongoose");

const HindiJamSchema = new mongoose.Schema({
  uname: {
    type : String,
    required : true,
    index : true,
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
    unique,
  },
  year: {
    type : Number,
    required : true,
    max : 4,
    min : 2,
  },
});

const HindiJam = mongoose.model('hindiJam', HindiJamSchema)

module.exports = HindiJam
