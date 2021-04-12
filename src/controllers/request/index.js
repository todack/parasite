const { processRequest, requestStatus } = require('../../services/useCases/request');
const makePostRequest = require('./postRequest');
const makeGetRequest = require('./getRequest');

const postRequest = makePostRequest({ processRequest });
const getRequest = makeGetRequest({ requestStatus });

module.exports = Object.freeze({ postRequest, getRequest });