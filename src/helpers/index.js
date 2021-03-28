const makeCallback = require('./makeCallback');
const makeHttpRequest = require('./makeHttpRequest');
const secretGenerator = require('./secretGenerator');
const { hash, compareHash } = require('./hashManager');

module.exports = Object.freeze({
    makeCallback,
    makeHttpRequest,
    secretGenerator,
    hash,
    compareHash
});