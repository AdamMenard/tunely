// requires apps:
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var controllers = require('./controllers');

// creates express app
var app = express();

// // serve static files in public
app.use(express.static('public'));

// // body parser config to accept our datatypes
// app.use(bodyParser.urlencoded({ extended: true }));


//**************
//*** ROUTES ***
//**************

  //* HTML ENDPOINTS (routes)

// define 'views/index.html' route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('/views/index.html' , { root : __dirname});
});

  //* JSON API ENPOINTS (routes)

// get DATA from: tunely.controllers
app.get('/api', controllers.api.index);
app.get('/api', controllers.albums.index);



//**************
//*** SERVER ***
//**************

//listen ROUTE to tell server on which port to start
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
