var express = require('express');
var router = express.Router();
var Post = require('../models/post');

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/howitworks', function(req, res) {
  res.render('howitworks', { 
  	// title: 'Express' 
  });
});

router.get('/be-a-reader', function(req, res) {
  res.render('apply', { 
  	// title: 'Express' 
  });
});

router.get('/blog', function(req, res) {
  //Backbone.find() all documents inside the Post collection.
  Post.find({}, function(err, docs){
    res.render('blog', { 
    title: 'Express',
    //assign all docs to "posts"
    posts: docs 
  });
  });

});

router.get('/thank-you', function(req,res){
  res.render('thankyouapplicant');
})

router.get('/editprofile', function(req, res) {
  res.render('editprofile', { 
  	// title: 'Express' 
  });
});

router.get('/authors', function(req, res) {
  res.render('authors', { 
    // title: 'Express' 
  });
});

module.exports = router;
