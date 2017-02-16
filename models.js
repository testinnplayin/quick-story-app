'use strict';

const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
	title : { type : String, required : true },
	photo : { type : String, required : true },
	story : String,
	author : {
		firstName : String,
		lastName : String
	}
});

storySchema.virtual('nameString').get(function() {
	return `${this.author.lastName}, ${this.author.firstName}`;
});

storySchema.methods.apiRepr = function() {
	return {
		id : this._id,
		title : this.title,
		photo : this.photo,
		story : this.story,
		author : this.nameString
	}
};

const Story = mongoose.model('Story', storySchema);

module.exports = {Story};