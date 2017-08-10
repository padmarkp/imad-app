var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one' : {
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
                                                
    },
'article-two' :{
    title: 'Article Two | Padmarkp',
    heading: 'Article Two',
    date:'Aug 10,2017',
    content: `
                                        <p>
                                            1. Who discovered bulb?
                                            A. Edison
                                        </p>`
    },
'article-three':{
    title: 'Article Three | Padmarkp',
    heading: 'Article Three',
    date:'Aug 20,2017',
    content: `
                                        <p>
                                            1. Who discovered neutron?
                                            A. Chadwick
                                        </p>`
    
    }
};
    
    function createTemplate(data){
        var title=data.title;
        var date=data.date;
        var heading=data.heading;
        var content=data.content;
        
    
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
            ${date}
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

var counter=0;
app.get('/counter',  function(req, res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
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
