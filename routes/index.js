var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express V13 - All hail Gordo the grumpy Gnat!' });
});

module.exports = router;
