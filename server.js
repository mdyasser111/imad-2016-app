var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg'),pool;
var crypto = require('crypto');
var bodyparser = require('body-parser');
var session = require('express-session');

var config = {
    user     : 'mdyasser111',
    database : 'mdyasser111',
    host     : 'db.imad.hasura-app.io',
    port     : '5432'
    password : process.    .DB-PASSWORD
};

var app = express();
app.use(morgan('combined'));
app.use(bodyparser.json());

app.use(session((
    secret : 'someRandomSecret value',
    cookie : {manAge : 200*60*60*24*34}
    }));
    
    

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

