var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('home', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.get('/registration', function(req, res, next){
  return res.render('registration')
});


router.post('/registration', function(req, res, next){
  var user = req.body;
  User.create(user, function(err, user){
    return res.send("user created");
  })
});