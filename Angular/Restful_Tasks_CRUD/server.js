// ================ MAIN SERVER SETUP AND SETTINGS ================
// --- setting up all node js modules ---
var express = require("express");
var path = require('path');
var session = require('express-session');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');  // cant remove ? connection fails ??
var app = express();
const flash = require('express-flash');

require('./server/config/mongoose.js');

// --- basic app settings views path, static path, view engine ---
//app.set('views', __dirname + '/client/views');
//app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + "/client/dist/client"));
//app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(flash());

// setting up the session data
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

    
  // --- setting up my mongoDB and mongoose ---
  // mongoose.connect('mongodb://localhost/QuotingDojo');

//   var UserSchema = new mongoose.Schema({
//       name: {type: String, required: 'Please Enter your Name'},
//       quote: {type: String, required: 'A Quote is Required'}
//     }, {timestamps: true})

    // var User = mongoose.model('User', UserSchema);
    var Task = require('./server/models/task.js');
    
// ================ ROUTES AND CONTROLLERS ================
// --- root route to render the index.ejs page ---
// Modularized Routing in effect
   require('./server/config/routes.js')(app);

