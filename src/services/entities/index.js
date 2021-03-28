const buildMakeUser = require('./user');
const buildMakeDomain = require('./domain');
const buildMakeProvider = require('./provider');
const { secretGenerator, hash } = require('../../helpers');

const makeUser = buildMakeUser({ isValidEmail, secretGenerator, hash });
const makeDomain = buildMakeDomain({ isValidDomainName });
const makeProvider = buildMakeProvider({ isValidUrl, isValidFormat });

module.exports = Object.freeze({
    makeUser,
    makeDomain,
    makeProvider
});

function isValidEmail({ email }) {
    return true;
}

function isValidDomainName({ name }) {
    return true;
}

function isValidUrl({ url }) {
    return true;
}

function isValidFormat({ format }) {
    return true;
}
