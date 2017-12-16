var db = require("./models");


//SONG LIST VARIABLE
var songsList = [{
  name: 'Swamped',
  trackNumber: 1
}, {
  name: "Heaven's a Lie",
  trackNumber: 2
}, {
  name: 'Daylight Dancer',
  trackNumber: 3
}, {
  name: 'Humane',
  trackNumber: 4
}, {
  name: 'Self Deception',
  trackNumber: 5
}, {
  name: 'Aeon',
  trackNumber: 6
}, {
  name: 'Tight Rope',
  trackNumber: 7
}];


//ALBUM LIST VARIABLE
var albumsList = [{
  artistName: 'Nine Inch Nails',
  name: 'The Downward Spiral',
  releaseDate: '1994, March 8',
  genres: [ 'industrial', 'industrial metal' ]
}, {
  artistName: 'Metallica',
  name: 'Metallica',
  releaseDate: '1991, August 12',
  genres: [ 'heavy metal' ]
}, {
  artistName: 'The Prodigy',
  name: 'Music for the Jilted Generation',
  releaseDate: '1994, July 4',
  genres: [ 'electronica', 'breakbeat hardcore', 'rave', 'jungle' ]
}, {
  artistName: 'Johnny Cash',
  name: 'Unchained',
  releaseDate: '1996, November 5',
  genres: [ 'country', 'rock' ]
}];



// CREATES ALBUMS WITH A 'SONGS' KEY THAT CONTAINS AN ARRAY OF SONGS
db.Album.remove({}, function(err, albums){
 console.log('removed all albums');

 albumsList.forEach(function (albumObj) {
   var album = new db.Album(albumObj);
   album.songs = songsList;
   album.save(function(err, savedAlbum){
     if (err) {
       console.log(err);
       return;
     }
     console.log('saved ', savedAlbum.name);
   });
 });
});

  db.Song.create(songsList);
