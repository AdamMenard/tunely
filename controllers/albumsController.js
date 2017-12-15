// controllers/albumsController.js

//*********************************

// **   ALBUMS   **
//******************
// var albums = [{
//      // data moved to seed.js
// }];



// **   ROUTES  **
//******************

// GET /api/albums
function index(req, res) {
    // get all albums from the database
    db.Card.find({}, function(err, allAlbums) {
      // add some error checking here
      if (err) {
        res.status(500).json({error: err.message});
      }
      // send back all albums as JSON
      res.json(allAlbums);
    });
  }

// POST /api/albums
function create(req, res) {
  // create an album based on request body and send it back as JSON
}

// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
}

// exports
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
