// This server.js file has used three basic npm packages/ dependencies including the 'express', 'body-parser' and 'path'.
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

// Sets an initial port to be used alterntively, Incase the later port is not compatible, then the process.env.port listens other local hosts
var PORT = process.env.PORT || 3000;

//Body parser is used to simplify the interpretation of data in the server

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
    console.log('Your server is connected');
});