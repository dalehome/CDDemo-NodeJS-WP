var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express V8- All new Bollox the Shark!' });
});

module.exports = router;
