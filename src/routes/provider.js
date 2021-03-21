const { Router } = require('express');
const { makeCallback }= require('../helpers');
const {
    putProvider,
    getProvider,
    patchProvider,
    deleteProvider
} = require('../controllers/provider');

const providerRoutes = Router();

providerRoutes.put('/', makeCallback(putProvider));

// allow to form query in get: 
// /provider/?id=something.
// /provider/?author=something.
// /provider/?domain=something.
providerRoutes.get('/', makeCallback(getProvider));
providerRoutes.patch('/:id', makeCallback(patchProvider));
providerRoutes.delete('/:id', makeCallback(deleteProvider));

module.exports = providerRoutes;