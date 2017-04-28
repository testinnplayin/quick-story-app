'use strict';

const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const { window } = new JSDOM(`<!doctype html><html><body></body></html>`);
