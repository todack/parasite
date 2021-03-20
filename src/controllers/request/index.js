const { someAlgorithm } = require('../../services/useCases/common');
const makeGetService = require('./getService');

const getService = makeGetService({ someAlgorithm });

module.exports = Object.freeze({ getService });