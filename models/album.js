// models/album.js


// require mongoose
var mongoose = require("mongoose");


// set up shorthand Schema variable to stand in for mongoose.Schema
var Schema = mongoose.Schema;

//models/album.js
var AlbumSchema = new Schema({
  artistName: String,
  name: String,
  releaseDate: String,
  genres: [ String ]
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
module.exports.Album = require("./album.js");
