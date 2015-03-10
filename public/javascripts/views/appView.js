var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#blog',
	//events key
	//listen for submit action from element with #newpost ID
	//...then execute 'newPostSubmit' method
	events: {
		'submit #newpost': 'newPostSubmit'
	},
	//attach event listeners to collection
	initialize: function(){
		this.listenTo(app.posts, 'add', this.addOne);
		this.listenTo(app.posts, 'reset', this.addAll);
	},
	addOne: function(post){
		var view = new app.PostView({
			//tell view what model to work with (the model is called 'post')
			model: post
		});
		//find element(s) with ID #posts
		this.$('#posts').append(
			view.render().el
		);
	},
	//loop through items in our Collection and add each one individually.
	addAll: function(){
		this.$('#posts').empty();
		app.posts.each(this.addOne, this);
	},
	newPostSubmit: function(e){
		//prevent form from submitting itself, which is the default behavior for 'submit'
		e.preventDefault();
		//create object called attributes
		//contains all the key:value pairs that were inserted via the form
		var attributes = {
			title: this.$('[name="title"]').val(),
			content: this.$('[name="content"]').val(),
			posted: new Date()
		};
		//call create(), pass in all the attributes grabbed from the form in newPostSubmit
		app.posts.create(attributes);
		//empty values from form so they're clear for next time
		this.$('[type="text"]').val('');
	}
});