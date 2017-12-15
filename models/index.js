// models/index.js
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

var Album = require("./album.js");
module.exports.Album = Album;

// two in one of above
// module.exports.Album = require("./album.js");
