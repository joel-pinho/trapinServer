
// Dependencies
var express = require('express');
//var bodyParser = require('body-parser');
//var multer = require('multer');

// Express
var app = express();
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Multer
//app.use(multer({dest: './uploads/'}).any());

// Start Server
app.listen(3000);
console.log('API is running on port 3000');