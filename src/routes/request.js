const { Router } = require('express');
const makeCallback = require('../helpers/makeCallback');
const { postService } = require('../controllers/request');

const requestRoutes = Router();

// As per MDN and REST spec, get should not contain body.
// Also it should be represented completely by url, such 
// that it could be typed in browsers and produce the same result.
// It also has caching effects in browsers and proxies.
// Post is a better alternative but this request doesn't create
// and change of state in server hence, it is also problematic.
// Put is another option but its response should not contain body.
// Hence, Post seems to be the best choice as it contains some changes in server.
requestRoutes.post('/:domain', makeCallback(postService));

module.exports = requestRoutes;