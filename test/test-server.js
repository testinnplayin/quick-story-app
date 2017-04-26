// 'use strict';
//
// const {app, runServer, closeServer} = require('../server');
// const {Story} = require('../models');
// const {TEST_DATABASE_URL} = require('../config');
//
// const chai = require('chai');
// const chaiHTTP = require('chai-http');
// const faker = require('faker');
// const mongoose = require('mongoose');
//
// mongoose.Promise = global.Promise;
//
// const should = chai.should();
//
// chai.use(chaiHTTP);
//
// function generateStoryData() {
// 	return {
// 		userTitle: faker.lorem.sentence(),
// 		photo: faker.image.imageUrl(),
// 		userStory: faker.lorem.paragraph(),
// 		author: {
// 			firstName: faker.name.firstName(),
// 			lastName: faker.name.lastName()
// 		}
// 	};
// }
//
// function seedStory() {
// 	console.log('Seeding story data');
//
// 	const seedData = [];
//
// 	for(let i = 0; i <= 5; i++) {
// 		seedData.push(generateStoryData());
// 	}
//
// 	return Story.insertMany(seedData);
// }
//
// function tearDownDb() {
// 	console.warn('Deleting test database');
//
// 	return mongoose.connection.dropDatabase();
// }
//
// describe('Random Photo', function() {
// 	before(function() {
// 		return runServer();
// 	});
//
// 	after(function() {
// 		return closeServer();
// 	});
//
// 	it('should display a random photo on GET', function() {
// 		return chai.request(app)
// 		.get('/random-photo')
// 		.then(function(res) {
// 			res.should.have.status(200);
// 			res.should.be.json;
// 			res.body.should.be.a('object');
// 		});
// 	});
// });
//
// describe('setting up an API environment for testing Story', function() {
// 	before(function() {
// 		return runServer(TEST_DATABASE_URL);
// 	});
//
// 	beforeEach(function() {
// 		return seedStory();
// 	});
//
// 	afterEach(function() {
// 		return tearDownDb();
// 	});
//
// 	after(function() {
// 		return closeServer();
// 	});
//
// 	describe('GET verb at /stories', function() {
// 		it('should return a list of five or less stories', function() {
// 			let res;
//
// 			return chai.request(app)
// 				.get('/stories')
// 				.then(function(_res) {
// 					res = _res;
// 					res.should.have.status(200);
// 					res.body.stories.should.have.length.of.at.least(1);
// 					res.body.stories.should.have.length.below(6);
// 				});
// 		});
// 	});
//
// 	describe('GET verb at /story/:id', function() {
// 		it('should return a specific story', function() {
// 			let story = {};
//
// 			return Story
// 				.findOne()
// 				.exec()
// 				.then(function(_story) {
// 					story.id = _story.id;
//
// 					return chai.request(app).get(`/story/${story.id}`);
// 				})
// 				.then(function(res) {
// 					res.should.have.status(200);
// 					res.should.be.json;
// 					res.body.should.be.a('object');
// 					res.body.should.include.keys('id', 'userTitle', 'userStory', 'photo', 'author');
// 					res.body.id.should.be.equal(story.id);
//
// 					return Story.findById(story.id);
// 				});
// 		});
// 	});
//
// 	describe('POST verb at /story/new', function() {
// 		it('should create a story with the right fields', function() {
// 			let newStory = generateStoryData();
//
// 			return chai.request(app)
// 				.post('/story/new')
// 				.send(newStory)
// 				.then(function(res) {
// 					let auth = res.body.author,
// 						authArr = auth.split(', ');
//
// 					res.should.have.status(201);
// 					res.should.be.json;
// 					res.body.should.include.keys('id', 'userTitle', 'photo', 'userStory', 'author');
// 					res.body.id.should.not.be.null;
// 					res.body.userTitle.should.not.be.null;
// 					res.body.photo.should.not.be.null;
// 					res.body.userTitle.should.equal(newStory.userTitle);
// 					res.body.photo.should.equal(newStory.photo);
// 					res.body.userStory.should.equal(newStory.userStory);
// 					authArr[1].should.equal(newStory.author.firstName);
// 					authArr[0].should.equal(newStory.author.lastName);
//
// 					return Story.findById(res.body.id);
// 				})
// 				.then(function(story) {
// 					story.userTitle.should.equal(newStory.userTitle);
// 					story.photo.should.equal(newStory.photo);
// 					story.userStory.should.equal(newStory.userStory);
// 					story.author.firstName.should.equal(newStory.author.firstName);
// 					story.author.lastName.should.equal(newStory.author.lastName);
// 				});
// 		});
// 	});
//
// 	describe('PUT verb at /story/:id', function() {
// 		it('should update a story with the right fields', function() {
// 			let updatedStory = {
// 				userTitle: 'This is the Best Title Ever'
// 			};
//
// 			return Story
// 				.findOne()
// 				.exec()
// 				.then(function(story) {
// 					updatedStory.id = story.id;
//
// 					return chai.request(app)
// 						.put(`/story/${story.id}`)
// 						.send(updatedStory);
// 				})
// 				.then(function(res) {
// 					res.should.have.status(204);
// 					return Story.findById(updatedStory.id).exec();
// 				})
// 				.then(function(story) {
// 					story.userTitle.should.equal(updatedStory.userTitle);
// 				});
// 		});
// 	});
//
// 	describe('DELETE verb at /story/:id', function() {
// 		it('should delete a story', function() {
// 			let story;
//
// 			return Story
// 				.findOne()
// 				.exec()
// 				.then(function(_story) {
// 					story = _story;
// 					return chai.request(app).delete(`/story/${story.id}`);
// 				})
// 				.then(function(res) {
// 					res.should.have.status(204);
//
// 					return Story.findById(story.id).exec();
// 				})
// 				.then(function(_story) {
// 					should.not.exist(_story);
// 				});
// 		});
// 	});
// });
