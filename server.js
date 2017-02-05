'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('build'));

app.use(morgan('common'));

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(PORT, err => {
	if (err) {
		console.error(err);
	}

	console.log(`Server listening on ${PORT}`);
});