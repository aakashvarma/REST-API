let express = require('express');
let router = express.Router();
let Ninja = require('../models/ninja');

router.get('/ninjas', function(req, res){
    res.send({type: 'GET'});
});

router.post('/ninjas', function(req, res, next){
    // let ninja = new Ninja(req.body);
    // ninja.save();
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

router.put('/ninjas/:id', function(req, res){
    res.send({type: 'PUT'});
});

router.delete('/ninjas/:id', function(req, res){
    res.send({type: 'DELETE'});
});


module.exports = router;









