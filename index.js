let express = require('express');
let routes = require('./routes/api');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// setup express app
let app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', routes);

// error handling middleware
app.use(function(err, req, res, next){
    // console.log(err);
    res.status(422);
    res.send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening to requests');
});