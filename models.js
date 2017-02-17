'use strict';

const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
	userTitle : { type : String, required : true },
	photo : { type : String, required : true },
	userStory : String,
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
		userTitle : this.userTitle,
		photo : this.photo,
		userStory : this.userStory,
		author : this.nameString
	}
};

const Story = mongoose.model('Story', storySchema);

module.exports = {Story};