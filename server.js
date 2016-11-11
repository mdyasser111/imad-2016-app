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
 function create Template(data){
     var title = data.title;
     var date = data.date;
     var heading = data.heading;
     var content = data.content;
     
     var html tamplate
     <html>
          <head>
                <title>
                       $(title)
                </title>
                <metaname ="viewport" content ="width"-device-width,Intial-scale-I"/>
                <link href ="/ui/style.css" rel ="stylesheet"/>
         </head>
   <body>
         <div class = "container">
         <div>
              <a href = "1",     </div>
         </div>
         <hr/>
         <h3>
             ${heading}
         </h3>
         <div>
             ${date}
         </div>
         <div>
             ${contact}
         </div>
    </body>
</html>
;
return html template;
        
 }
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


function hash(input,salt){
    //how do we create a hash?
    var hashed
    return
}


app.get('/hash/input', function (req, res) {
    
    
    
    
}
app.get('/create-user', function (req, res) {
   //username,password
   //"username": "yasser" , "password" : password
   //json
   var username = req.body.username;
   var password = req.body.password;
   var salt = crypto
   

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

