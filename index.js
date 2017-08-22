
// builtin
var fs = require('fs');

// 3rd party
var express = require('express');
var hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');


// set the view engine to use handlebars
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

    res.locals = {
        business_name: 'Business Name',
    }

    res.render('pages/index');
});

// blank page
app.get("/blank",function(req,res){
  	res.render('pages/blank');
});

// flot page
app.get("/flot",function(req,res){
  	res.render('pages/flot');
});

// morris page
app.get("/morris",function(req,res){
  	res.render('pages/morris');
});

// tables page
app.get("/tables",function(req,res){
  	res.render('pages/tables');
});

// forms page
app.get("/forms",function(req,res){
  	res.render('pages/forms');
});

// panels-wells page
app.get("/panels-wells",function(req,res){
  	res.render('pages/panels-wells');
});

// buttons page
app.get("/buttons",function(req,res){
  	res.render('pages/buttons');
});

// notifications page
app.get("/notifications",function(req,res){
  	res.render('pages/notifications');
});

// typography page
app.get("/typography",function(req,res){
  	res.render('pages/typography');
});

// icons page
app.get("/icons",function(req,res){
  	res.render('pages/icons');
});


// grid page
app.get("/grid",function(req,res){
  	res.render('pages/grid');
});

// login page
app.get("/login",function(req,res){
  	res.render('pages/login');
});


app.listen(3000);

