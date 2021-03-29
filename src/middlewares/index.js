const makeAuthHandler = require('./authHandler');
const makeErrorHandler = require('./errorHandler');
const { authUser } = require('../services/useCases/user');

const authHandler = makeAuthHandler({ authUser });
const errorHandler = makeErrorHandler({ });

module.exports = Object.freeze({
    authHandler,
    errorHandler
});