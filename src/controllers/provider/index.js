const {
    addProvider,
    removeProvider,
    editProvider,
    listProvider
} = require('../../services/useCases/provider');

const makeGetProvider = require('./getProvider');
const makeDeleteProvider = require('./deleteProvider');
const makePatchProvider = require('./patchProvider');
const makePostProvider = require('./postProvider');

const getProvider = makeGetProvider({ listProvider });
const deleteProvider = makeDeleteProvider({ removeProvider });
const patchProvider = makePatchProvider({ editProvider });
const postProvider = makePostProvider({ addProvider });

module.exports = Object.freeze({
    getProvider,
    deleteProvider,
    patchProvider,
    postProvider
});