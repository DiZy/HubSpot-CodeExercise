var express = require('express');
var app = express();
var path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', function(req, res) {
    res.render('pages/index', {
    	test: "testing"
    });
});

app.listen(8000);
console.log('Running on port 8000');