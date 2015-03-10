var app = app || {};

//View Single Post
app.PostView = Backbone.View.extend({
	//put each post inside its own new 'li' element
	tagName: 'li',
	template: _.template( $('#post-template').html() ),
	events: {
		'click .delete': 'deletePost'
	},
	initialize: function(){
		this.listenTo(this.model, 'destroy', this.remove);
	},
	//function that renders the view
	render: function(){
		//
		this.$el.html( this.template(
			this.model.toJSON()
		));
		//return our object containing everything defined here in PostView
		return this;
	},
	deletePost: function(){
		//call Backbone's destroy() method
		this.model.destroy();
	}
});