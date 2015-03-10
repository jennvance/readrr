//This file is an API for our Backbone-based blog posting

var express = require('express');
var router = express.Router();
var Post = require('../models/post');

//base url for route handler = '/blogapi'
router.get('/', function(req, res){
	//send an array to client(?) that contains object full of blog posts...
	//...that use the Class defined in models.js
	// res.send([{
	// 	title: 'Hello World, this is a test!',
	// 	posted: 'now',
	// 	content: 'Whoa thats a lot of content'
	// }]);

	//Find all posts inside model.
	Post.find({}, function(err, docs){
		res.send(docs);
	})
});

router.post('/', function(req, res){
	//create a new post using server-side Post model/Class/schema
	//req.body is what is sent when we Backbone.create() new Post
	var newPost = new Post(req.body);
	//call Mongoose method 'save'
	newPost.save(function(err, doc){
		//'doc' is the Mongoose/Mongo(?) document that was created in the previous line.
		//Backbone will update model with changes if we send the document back
		//to the server in our post request
		res.send(doc);
	});
});

router.delete('/:id', function(req, res){
	//take ID param and store it in variable
	var postId = req.params.id;
	//call the remove method on Post model where underscore ID matches the post ID.
	Post.remove({_id: postId}, function(){
	//use our callback to send a success message. This is mostly to
	//prevent the page from hanging while the request is made
	res.send('success');
	})
})

module.exports = router;