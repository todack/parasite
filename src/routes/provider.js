const { Router } = require('express');
const { makeCallback }= require('../helpers');
const {
    postProvider,
    getProvider,
    patchProvider,
    deleteProvider
} = require('../controllers/provider');
const { authHandler } = require('../middlewares');

const providerRoutes = Router();

providerRoutes.post('/', authHandler, makeCallback(postProvider));

// allow to form query in get: 
// /provider/?id=something.
// /provider/?author=something.
// /provider/?domain=something.
providerRoutes.get('/', makeCallback(getProvider));
providerRoutes.get('/:id', makeCallback(getProvider));
providerRoutes.patch('/:id', authHandler, makeCallback(patchProvider));
providerRoutes.delete('/:id', authHandler, makeCallback(deleteProvider));

module.exports = providerRoutes;