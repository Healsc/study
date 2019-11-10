var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* router.get('/reg',function(req,res,next){
  res.render('reg');
}) */
var User=require('../controllers/user')
router.get('/reg',User.reg);

router.post('/reg',User.do_reg)


module.exports = router;
