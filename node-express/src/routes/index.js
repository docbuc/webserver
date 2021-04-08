var express = require('express');
var router = express.Router();
const debug = require('debug')('server');
/* GET home page. */
router.get('/', function(req, res, next) {
  debug('Kopfzeilen: ', req.headers)
  res.render('index', { title: 'Express' });
});

module.exports = router;
