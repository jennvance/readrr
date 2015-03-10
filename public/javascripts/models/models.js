//generic namespace called "app". Purpose = so the order of files doesn't matter (?)
//but seriously, what is the purpose of generic namespace?
//app is either the existing app, or if app doesn't exist, a new object called app.
var app = app || {};

//define basic model using Backbone. Call it PostModel. Assign it to an extended Backbone model.
//Pass in an object
//This functions as a Class: an inheritable object that's somewhat useless until we make new instances of it.
app.PostModel = Backbone.Model.extend({
	//Grab unique ID that mongoose supplies for each DB entry
	idAttribute: '_id',
	//set default values for the model
	defaults: {
		title: '',
		content: '',
		posted: ''
	}
});

//Collection is sort of like an array containing instances of our PostModel class.
app.PostCollection = Backbone.Collection.extend({
	model: app.PostModel,
	//define the connection that Backbone can make with the server
	//aka define what sorts of requests Backbone can make
	url: '/blogapi'
});

app.posts = new app.PostCollection();