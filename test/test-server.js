'use strict';

const chai = require('chai');
const chaiHTTP = require('chai-http');

const {app, runServer, closeServer} = require('../server');

const should = chai.should();

chai.use(chaiHTTP);

describe('Random Photo', function() {
	before(function() {
		return runServer();
	});

	after(function() {
		return closeServer();
	});

	it('should display a random photo on GET', function() {
		return chai.request(app)
		.get('/random-photo')
		.then(function(res) {
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.a('object');
		});
	});
});