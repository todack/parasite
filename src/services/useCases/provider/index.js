const makeAddProvider = require('./addProvider');
const makeRemoveProvider = require('./removeProvider');
const makeEditProvider = require('./editProvider');
const makeListProvider = require('./listProvider');

const { providerQueries } = require('../../../database');

const addProvider = makeAddProvider({ providerQueries });
const removeProvider = makeRemoveProvider({ providerQueries });
const editProvider = makeEditProvider({ providerQueries });
const listProvider = makeListProvider({ providerQueries });

module.exports = Object.freeze({
    addProvider,
    removeProvider,
    editProvider,
    listProvider
});