
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');


// Suha route other files
var activitybutton = require('./routes/activitybutton');
var teachbutton = require('./routes/teachbutton');
var profilebutton = require('./routes/profilebutton');
var homebutton = require('./routes/homebutton');
var tennislink = require('./routes/tennislink');
var submitbutton = require('./routes/submitbutton');
var helpbutton = require('./routes/helpbutton');
var hirelink = require('./routes/hirelink');
var hiresubmit = require('./routes/hiresubmit');
var edit = require('./routes/edit');
var homeB = require('./routes/homeB');

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
//app.get('/viewAlt', index.viewAlt)
// Example route
// app.get('/users', user.list);


//Suha's routes to other files
app.get('/learn', activitybutton.view)
app.get('/teach', teachbutton.view)
app.get('/profile', profilebutton.view)
app.get('/home', homebutton.view)
app.get('/tennis', tennislink.view)
app.get('/submit', submitbutton.view)
app.get('/help', helpbutton.view)
app.get('/hire', hirelink.view)
app.get('/hiresubmit', hiresubmit.view)
app.get('/edit',edit.view)
app.get('/homeB',homeB.view)


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
