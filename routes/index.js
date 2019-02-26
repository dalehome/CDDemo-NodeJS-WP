var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express V11 - All hail Marvin the moody Monkey!' });
});

module.exports = router;
