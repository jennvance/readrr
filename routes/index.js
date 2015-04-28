var express = require('express');
var router = express.Router();
var Profile = require('../dbmodels/createprof');

router.get('/', function(req, res) {
  res.render('index', { title: 'Readrr' });
});

router.get('/be-a-reader', function(req, res) {
  res.render('apply', { 
  	title: 'Apply' 
  });
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

router.get('/jobs', function(req,res){
  res.render('jobs', {
    title: 'Work with Us'
  });
});

router.get('/authors', function(req, res) {
  // Profile.findOne({_id: "553aad8fdcee63add0614928"}, function(profileSchema, data){
  //   console.log(data);
  //   console.log(data.name);
    res.render('authors', { 
      title: 'Author Tools',
      // readerName: data.name,
      // readerCity: data.city,
      // readerBook: data.favoritebook 
    });   
  // })

});

module.exports = router;
