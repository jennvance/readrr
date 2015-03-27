var express = require('express');
var router = express.Router();
var Post = require('../models/post');
var Profile = require('../models/createprof');

router.get('/', function(req, res) {
  res.render('index', { title: 'Readrr' });
});

router.get('/be-a-reader', function(req, res) {
  res.render('apply', { 
  	title: 'Apply' 
  });
});

// router.get('/blog', function(req, res) {
//   //Backbone.find() all documents inside the Post collection.
//   Post.find({}, function(err, docs){
//     res.render('blog', { 
//     title: 'Blog',
//     //assign all docs to "posts"
//     posts: docs 
//   });
//   });

});

router.get('/thank-you', function(req, res){
  res.render('thankyouapplicant', { title: 'Thanks!' });
})

router.get('/new-reader-challenge', function(req, res){
  res.render('challenge', { title: 'Reader Assessment' });
})

router.get('/createprofile', function(req, res){
  // Profile.find({_id : req.user._id}, function(err, user){
  // Profile.findOne({_id : "550f24e0ccd3becd69f78cca"}, function(err, user){
    
  //   if ( err ) { console.log('error! ', err)}
    res.render('createprofile', { 
      title: 'Create Profile',
      // function datastuff() {
      //   if(Profile.name) {
      //     name: Profile.name
      //   } else {
      //     name: 'Your Name'
      //   }
      // }

      // name: user.name,
      // city: user.city,
      // book: user.favoritebook 
    });
  })
// })

router.get('/editprofile', function(req, res) {
  res.render('editprofile', { 
  	title: 'Edit Profile' 
  });
});

router.get('/authors', function(req, res) {
  res.render('authors', { 
    title: 'Author Tools' 
  });
});

module.exports = router;
