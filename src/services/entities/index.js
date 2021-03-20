const buildMakeUser = require('./user');
const buildMakeDomain = require('./domain');
const buildMakeProvider = require('.provider');

const makeUser = buildMakeUser({ accessCodeGen, isValidEmail });
const makeDomain = buildMakeDomain({});
const makeProvider = buildMakeProvider({});

module.exports = Object.freeze({
    makeUser,
    makeDomain,
    makeProvider
});