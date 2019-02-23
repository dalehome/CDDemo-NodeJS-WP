var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express V10- All hail Marevin the Monkey!' });
});

module.exports = router;
