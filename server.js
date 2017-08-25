var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto= require('crypto');
var bodyParser= require('body-parser');


var config={
    user: 'padmarkp',
    database: 'padmarkp',
    host:'db.imad.hasura-app.io',           /*got error and solved */
    port:'5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

var pool= new Pool(config);

 function createTemplate(data){
        var title  =data.title;
        var date  =data.date;
        var heading = data.heading;
        var content = data.content;
        
    
    var htmlTemplate = 
    `
    <html>
    <head>
        <title>
        ${title}
        </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
        <style>
        </style>
    </head>
    <body>
        <div class="container">
        <a href="/">Home</a>
        <hr/>
    <div>
        <h1>
          ${heading}
        </h1>
        <div>
            ${date. toDateString()}
        </div>
        <div>
            ${content}
        </div>
    </div>     
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash(input, salt)
{
    var hashed= crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ['pbkdf2', 10000, salt, hashed.toString('hex')].join('$');
}

app.get('/hash/:input', function(req, res){
   var hashedString =hash(req.params.input,'this is some random string');
   res.send(hashedString);
});

/*Created user successfully on 25/08/178*/

app.post('/create-user', function (req, res) {
   // username, password
   // {"username": "tanmai", "password": "password"}
   // JSON
   var username = req.body.username;
   var password = req.body.password;
   var salt = crypto.randomBytes(128).toString('hex');
   var dbString = hash(password, salt);
   pool.query('INSERT INTO "user" (username, password) VALUES ($1, $2)', [username, dbString], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send('User successfully created: ' + username);
      }
   });
});

/*to loginwith the username*/

app.post('/login', function(req, res) 
{
var username = req.body.username;
   var password = req.body.password;
   pool.query('SELECT * FROM "user" username=$1' , [username],function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else 
          if(result.rows.length === 0 )
          res.send(403).send("Invalid username/password");
       else {
           var dbString = result.rows[0].password;
           var salt = dbString.split('$')[2];
           var hashedPassword =hash(password,salt);
           if(hashedPassword === dbString)
           {
               res.send("Credentials Matched");
           }
           else
           {
               res.send(403).send("Invallid username/password");
           }
       }
   });

});


/*18/08/17: Testconnection to database: this part is working */

app.get('/test-db', function(req,res){
    pool.query('SELECT * FROM test ' , function(err, result){
        if(err){
            res.status(500).send(err.toString());
        }
        else
        {
            res.send(JSON.stringify(result.rows));
        }
    });
});

/* Counter variable is also working---------------------working[12/08/17]*/

var counter=0;
app.get('/counter',  function(req, res){
    counter = counter + 1;
    res.send(counter.toString());
});


//to extract a bit of string usng parameter i.e sending data as part of url------------this is also working[24/08/17]

var names = [];
app.get ('/submit-name/:name', function(req, res){
    var name = req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));//to convert array into string
});


//to extract a bit of string using query parameter(? just change params to query)--------------this is also working[24/08/17]

app.get ('/submit-name', function(req, res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));// JSON is used to convert array into string
});

/*app.get('/:articleName', function(re, res)
{
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
*/

app.get('/articles/:articleName', function (req, res) {
  // SELECT * FROM article WHERE title = '\'; DELETE WHERE a = \'asdf'
  pool.query("SELECT * FROM article WHERE title = $1", [req.params.articleName], function (err, result) {
    if (err) {
        res.status(500).send(err.toString());
    } else {
        if (result.rows.length === 0) {
            res.status(404).send('Article not found');
        } else {
            var articleData = result.rows[0];
            res.send(createTemplate(articleData));
        }
    }
  });
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
