var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article one | Padmarkp',
    heading: 'Article one',
    date:'Aug 8,2017',
    content: `
                                        <p>
                                            1. Who discovered neutron?
                                            A. Chadwick
                                        </p>
                                        <p> 2. Who invented Cinematography?
                                            A. Edison
                                        </p>
                                        
                                        <p>
                                            3. Who discovered oxygen?
                                            A. Joseph Priestley
                                        </p>
                                        <p>
                                            4. Who invented Innert gases?
                                            A. Ramsay
                                        </p>
                                        <p>
                                            5. Who produced the Theory of Evolution?
                                            A. Darwin
                                         </p>
                                         <p>
                                            6.Stethoscope was invented by ?
                                            A.Henry Becquarrel
                                        </p `
                                                
    };




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
   res.send('article-two requested and will be served here ');
});

app.get('/article-three', function (req, res) {
   res.send('article-three requested and will be served here ');
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
