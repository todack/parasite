const { someAlgorithm } = require('../../services/useCases/common');
const makePostService = require('./postService');

const postService = makePostService({ someAlgorithm });

module.exports = Object.freeze({ postService });