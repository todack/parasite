const buildMakeUser = require('./user');
const buildMakeDomain = require('./domain');
const buildMakeProvider = require('./provider');

const secretGen = require('../../helpers/secretGenerator');

const makeUser = buildMakeUser({ isValidEmail, secretGen });
const makeDomain = buildMakeDomain({ isValidDomainName });
const makeProvider = buildMakeProvider({ isValidUrl, isValidFormat, secretGen });

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
