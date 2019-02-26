var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express V12 - All hail Mickey the moody Mouse!' });
});

module.exports = router;
