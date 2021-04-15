const buildMakeUser = require('./user');
const buildMakeDomain = require('./domain');
const buildMakeProvider = require('./provider');
const buildMakeRequest = require('./request');
const { secretGenerator, hash } = require('../../helpers');

const makeUser = buildMakeUser({ isValidEmail, secretGenerator, hash });
const makeDomain = buildMakeDomain({ isValidDomainName });
const makeProvider = buildMakeProvider({ isValidUrl, isValidFormat });
const makeRequest = buildMakeRequest({ isValidDomainId, isValidSourceType, isValidSource });

module.exports = Object.freeze({
    makeUser,
    makeDomain,
    makeProvider,
    makeRequest
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

function isValidSourceType({ sourceType }) {
    return true;
}

function isValidSource({ source, sourceType }) {
    return true;
}

function isValidDomainId({ domainId }) {
    return true;
}