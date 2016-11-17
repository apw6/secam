/**
 * Created by Shela on 11/16/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('camera', { title: 'Express' });
});

module.exports = router;