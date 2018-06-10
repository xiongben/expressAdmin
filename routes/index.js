var express = require('express');
var router = express.Router();

var userDAO = require('../dao/useDAO');
var result = require('../model/result');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('xb', { title: 'welcome to here' });
// });

router.get('/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  userDAO.getById(id, function (user) {
      res.json(result.createResult(true, user));
      
  });
});


module.exports = router;
