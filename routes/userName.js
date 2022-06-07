var express = require('express');
var router = express.Router();


router.get('/:name', function(req, res, next) 
{
    let name =req.params.name
    res.send(`hello ${name}`);
});

module.exports = router;