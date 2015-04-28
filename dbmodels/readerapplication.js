var mongoose = require('mongoose');

//This is our schema. We pass it an object literal.
var readerAppSchema = mongoose.Schema({
	firstname: String,
	lastname: String,
	email: String,
	referralcode: {
		type: String,
		default: null
	},
	why: String,
	favoritegenres: String,
	referredby: String
})

var ReaderApplicant = mongoose.model('ReaderApplicant', readerAppSchema);

module.exports = ReaderApplicant;