const makeCallback = require('./makeCallback');
const makeHttpRequest = require('./makeHttpRequest');
const secretGenerator = require('./secretGenerator');
const { hash, compareHash } = require('./hashManager');
const errors = require('./errors');

module.exports = Object.freeze({
    makeCallback,
    makeHttpRequest,
    secretGenerator,
    hash,
    compareHash,
    ...errors
});