const express = require('express');

const _port = 8080;
const _app_folder = '../sodacalc/dist/sodacalc';

const app = express();

var routes = require('./api/routes');
routes(app);

app.set('name', 'sodabutt');

// ---- SERVE STATIC FILES ---- //
app.get('*.*', express.static(_app_folder, {maxAge: '1y'}));

// ---- SERVE APLICATION PATHS ---- //
app.all('*', function (req, res) {
  console.log(`Request from ${req.headers.host}`);
  res.status(200).sendFile(`/`, {root: _app_folder});
});

// ---- START UP THE NODE SERVER  ----
app.listen(_port, function () {
  console.log(`Node Express server for ${app.get('name')} listening on port ${_port}`);
});
