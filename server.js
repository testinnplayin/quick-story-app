'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const PORT = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('build'));

app.use(morgan('common'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/build/index.html'));
});

let server;

function runServer(port = PORT) {
	return new Promise((resolve, reject) => {
		server = app.listen(port, function() {
			console.log(`Server is listening on port ${PORT}`);
			resolve(server);
		})
		.on('error', function(err) {
			reject(err);
		});
	});
}

function closeServer() {
	return new Promise((resolve, reject) => {
		console.log('Closing server');
		server.close(function(err) {
			if (err) {
				reject(err);

				return;
			}

			resolve();
		});
	});
}

if (require.main === module) {
	runServer().catch(err => console.error(err));
}

module.exports = {app, runServer, closeServer};