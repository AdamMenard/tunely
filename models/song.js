//models/song.js

// require mongoose
var mongoose = require("mongoose");

// song schema
var SongSchema = new Schema({
  name: String,
  trackNumber: Number
});


//create model
var Song = mongoose.model('Song', SongSchema);
//export model
module.exports = Song;
