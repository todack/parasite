const { Router } = require('express');
const { makeCallback } = require('../helpers');

const domainRoutes = Router();

domainRoutes.put('/', makeCallback(putDomain));
domainRoutes.get('/:id', makeCallback(getDomain));
domainRoutes.patch('/:id', makeCallback(patchDomain));
domainRoutes.delete('/:id', makeCallback(deleteDomain));

module.exports = domainRoutes;