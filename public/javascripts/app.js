var app = app || {};

$(document).on('ready', function(){
	//create new appView, render it, and attach to element
	app.appView = new app.AppView();
	//Backbone.reset() the Collection and pass in stringfied version of all objects in 'posts'
	//as contained in the variable bootstrapPosts
	app.posts.reset(bootstrapPosts);
	//fetch/serve all the posts
	//aka tell Backbone to visit the server at the URL passed (in this case, '/blogapi')
	//and download all the post object found there. \
	//it also calls the 'add' method for every object found.
	// app.posts.fetch();
})