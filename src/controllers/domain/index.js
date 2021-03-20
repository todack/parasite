const {
    addDomain,
    editDomain,
    listDomain,
} = require('../../services/useCases/domain');

const makeGetDomain = require('./getDomain');
const makePutDomain = require('./putDomain');
const makePatchDomain = require('./patchDomain');

// Didn't make remove domain because don't know what to do with the 
// providers. If user A creates domain, and user B creates provider.
// And if user A deletes the domain then user B's right will be trashed.
// Think about who is allowed to create new domains.
// If every one is allowed then there should be no way to delete it.

const getDomain = makeGetDomain({ listDomain });
const putDomain = makePutDomain({ addDomain });
const patchDomain = makePatchDomain({ editDomain });

module.exports = Object.freeze({
    getDomain,
    putDomain,
    patchDomain
});