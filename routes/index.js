var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express V10d - All hail Marvin the mighty Monkey!' });
});

module.exports = router;
