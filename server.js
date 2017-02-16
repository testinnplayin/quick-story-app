'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

const {PORT, DATABASE_URL} = require('./config');
const {Story} = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('build'));

app.use(morgan('common'));

mongoose.Promise = global.Promise;

//GET requests

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.get('/random-photo', (req, res) => {
	res.json({photo: 'http://www.freedigitalphotos.net/images/img/homepage/394230.jpg'});
});


//POST requests

app.post('/story/new', (req, res) => {
	const requiredFields = ['title', 'photo', 'story', 'author'];

	requiredFields.forEach(function(field) {
		if(!(field in req.body && req.body[field])) {
			return res.status(400).json({ message : `Please specify a value for ${field}` });
		}
	});

	Story
		.create({
			title : req.body.title,
			photo : req.body.photo,
			story : req.body.story,
			author : {
				firstName : req.body.author.firstName,
				lastName : req.body.author.lastName
			}
		})
		.then(function(story) {
			res.status(201).json(story.apiRepr());
		})
		.catch(function(err) {
			console.error(err);
			res.status(500).json({ message : 'Internal server error, cannot create story' });
		});
});

//Generic requests

app.use('*', (req, res) => {
	res.status(404).json({ message : 'Not found' });
});

//server stuff

let server;

function runServer(databaseUrl=DATABASE_URL, port=PORT) {

	return new Promise((resolve, reject) => {
		mongoose.connect(databaseUrl, function(err) {
			if (err) {
				return reject(err);
			}

			server = app.listen(port, function() {
				console.log(`Your app is listening on port ${port}`);
				resolve();
			})
			.on('error', function(err) {
				mongoose.disconnect();
				reject(err);
			});
		});
	});
}

function closeServer() {
	return mongoose.disconnect()
		.then(() => {
			return new Promise((resolve, reject) => {
				console.log('Closing server');
				server.close(function(err) {
					if (err) {
						return reject(err);
					}

					resolve();
				});
			});
		});
}

if (require.main === module) {
	runServer().catch(err => console.error(err));
}

module.exports = {app, runServer, closeServer};