var config = require('config');
var express = require('express');
var path = require('path');


var session = require('express-session');
var methodOverride = require('method-override');
var express_node_metrics = require('express-node-metrics');

var app = module.exports = express();

// declare global variables


// set our default template engine to "ejs"
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// load controllers
require('./libs/load_controllers')(app, {verbose: !module.parent});
var socketio_parser  = require('./libs/socketio_parser')
var parser_socket_io = new socketio_parser();

app.listen(3000);

