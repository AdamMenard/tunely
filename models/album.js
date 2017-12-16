// models/album.js


// require mongoose
var mongoose = require("mongoose");
var Song = require('./song');

// set up shorthand Schema variable to stand in for mongoose.Schema
var Schema = mongoose.Schema;


//models/album.js
var AlbumSchema = new Schema({
  artistName: String,
  name: String,
  releaseDate: String,
  genres: [String],
  songs: [Song.schema]
});


//create model
var Album = mongoose.model('Album', AlbumSchema);
//export model
module.exports = Album;
