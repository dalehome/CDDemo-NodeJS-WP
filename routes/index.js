var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express V10c - All hail Marvin the Monkey! - rebooted' });
});

module.exports = router;
