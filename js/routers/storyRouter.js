'use strict';

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const mongoose = require('mongoose');

const {Story} = require('../models/stories.js');

router.get('/:id', (req, res) => {
	if(!req.params.id) {
		const msg = `Request parameter path ${req.params.id} and request body id ${req.body.id} do not match`;

		res.status(400).json({ message : msg });
	}

	Story
		.findById(req.params.id)
		.exec()
		.then(function(story) {
			res.json(story.apiRepr())
		})
		.catch(function(err) {
			console.error(err);

			res.status(500).json({ message : 'Internal server error, cannot fetch story'});
		});
});


//POST requests

router.post('/new', jsonParser, (req, res) => {
	const requiredFields = ['userTitle', 'photo', 'userStory', 'author'];

	requiredFields.forEach(function(field) {
		if(!(field in req.body && req.body[field])) {
			return res.status(400).json({ message : `Please specify a value for ${field}` });
		}
	});

	Story
		.create({
			userTitle : req.body.userTitle,
			photo : req.body.photo,
			userStory : req.body.userStory,
			author : {
				firstName : req.body.author.firstName,
				lastName : req.body.author.lastName
			}
		})
		.then(function(story) {
			res.status(201).json(story.apiRepr());
			// $("window").location.href = '/stories';
		})
		.catch(function(err) {
			console.error(err);
			res.status(500).json({ message : 'Internal server error, cannot create story' });
		});
});

//PUT requests

router.put('/:id', jsonParser, (req, res) => {
	if (!(req.params.id && req.body.id && (req.body.id === req.params.id))) {
		const msg = `The params id ${req.params.id} and the body id ${req.body.id} do not match`;

		res.status(400).json({ message : msg });
	}

	const forUpdate = {};
	const updateFields = ['userTitle', 'userStory', 'author'];

	updateFields.forEach(field => {
		if(field in req.body) {
			forUpdate[field] = req.body[field];
		}
	});

	Story
		.findByIdAndUpdate(req.params.id, { $set : forUpdate })
		.exec()
		.then(story => {
			res.status(204).end();
		})
		.catch(err => {
			res.status(500).json({ message : 'Internal server error, could not update story' });
		});
});

//DELETE requests

router.delete('/:id', (req, res) => {

	Story
		.findByIdAndRemove(req.params.id)
		.exec()
		.then(story => res.status(204).end())
		.catch(err => {
			console.error(err);
			res.send(500).json({ message : 'Internal server error, could not delete story' });
		});
});

module.exports = router;
