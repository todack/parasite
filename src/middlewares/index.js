const makeAuth = require('./auth');
const authUser = require('../services/useCases/user');

const auth = makeAuth({ authUser });

module.exports = Object.freeze({
    auth
});