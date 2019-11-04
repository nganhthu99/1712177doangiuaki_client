var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/category', function(req, res, next) {
  res.render('category');
});

router.get('/cart', function(req, res, next) {
  res.render('cart');
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout');
});

router.get('/confirmation', function(req, res, next) {
  res.render('confirmation');
});

router.get('/forgotpassword', function(req, res, next) {
  res.render('forgotpassword');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/single-product', function(req, res, next) {
  res.render('single-product');
});

router.get('/tracking', function(req, res, next) {
  res.render('tracking');
});

router.get('/updateinfo', function(req, res, next) {
  res.render('undateinfo');
});

module.exports = router;
