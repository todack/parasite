const userQueries = require('./queries/user');
const domainQueries = require('./queries/domain');
const providerQueries = require('./queries/provider');
const requestQueries = require('./queries/request');

module.exports = Object.freeze({
    userQueries,
    domainQueries,
    providerQueries,
    requestQueries
});