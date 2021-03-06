var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://' + process.env.IP + '/bookAPI');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
//app.use('/api/authors', authorRouter);

app.get('/', function(req, res){
    res.send('welcome to my API');
});

app.listen(port, function(){
    console.log('Running on port: ' + port);
})