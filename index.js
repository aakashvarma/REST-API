let express = require('express');
let routes = require('./routes/api');

// setup express app

let app = express();
app.use('/api', routes);

// listen for requests

app.listen(process.env.port || 4000, function(){
    console.log('now listening to requests');
});