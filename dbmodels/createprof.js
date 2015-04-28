var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
	name: String,
	city: String,
	favoritebook: String
});

var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;

