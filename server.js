const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

// to create the expres app

const app = express();

// creating middleware to handle the serving of the app

app.use('/', serveStatic(path.join(__dirname, '/public')));

// creating default port to serve the app

const port = process.env.PORT || 5000;
app.listen(port);

console.log('server started on port ' + port);
