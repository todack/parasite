const { Router } = require('express');
const { makeCallback }= require('../helpers');

const providerRoutes = Router();

providerRoutes.put('/', makeCallback(putProvider));
providerRoutes.get('/:id', makeCallback(getProviders));
providerRoutes.patch('/:id', makeCallback(patchProvider));
providerRoutes.delete('/:id', makeCallback(deleteProvider));

module.exports = providerRoutes;