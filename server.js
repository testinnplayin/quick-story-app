'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const storyRouter = require('./js/routers/storyRouter');
const {PORT, DATABASE_URL} = require('./config');

const {Story} = require('./js/models/stories');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('build'));

app.use(morgan('common'));

//express routers

app.use('/story', storyRouter);

//GET requests

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.get('/random-photo', (req, res) => {
	res.json({photo: 'http://www.freedigitalphotos.net/images/img/homepage/394230.jpg'});
});

app.get('/stories', (req, res) => {
	Story
		.find()
		.limit(5)
		.exec()
		.then(stories => {
			res.json({
				stories: stories.map((story) => story.apiRepr())
			});
		})
		.catch(err => {
			console.error(err);
			res.status(500).json({ message : 'Internal server error, cannot fetch stories' });
		});
});

//Generic requests

// app.use('*', (req, res) => {
// 	res.status(404).json({ message : 'Not found' });
// });

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '/build/index.html'));
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
