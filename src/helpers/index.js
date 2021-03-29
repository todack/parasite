const makeCallback = require('./makeCallback');
const makeHttpRequest = require('./makeHttpRequest');
const secretGenerator = require('./secretGenerator');
const { hash, compareHash } = require('./hashManager');
const errors = require('./errors');
const makeLogger = require('./logger');

const logger = makeLogger();

module.exports = Object.freeze({
    makeCallback,
    makeHttpRequest,
    secretGenerator,
    logger,
    hash,
    compareHash,
    ...errors
});