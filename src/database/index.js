const userQueries = require('./queries/user');
const domainQueries = require('./queries/domain');
const providerQueries = require('./queries/provider');

module.exports = Object.freeze({
    userQueries,
    domainQueries,
    providerQueries
});