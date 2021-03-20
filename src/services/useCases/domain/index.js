const makeAddDomain = require('./addDomain.js');
const makeListDomain = require('./listDomain');
const makeEditDomain = require('./editDomain');

const { domainQueries } = require('../../../database');

const addDomain = makeAddDomain({ domainQueries });
const listDomain = makeListDomain({ domainQueries });
const editDomain = makeEditDomain({ domainQueries });

module.exports = Object.freeze({
    addDomain,
    listDomain,
    editDomain
});