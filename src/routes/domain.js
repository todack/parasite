const { Router } = require('express');
const { makeCallback } = require('../helpers');
const {
    postDomain,
    getDomain,
    patchDomain
} = require('../controllers/domain');

const domainRoutes = Router();

domainRoutes.post('/', makeCallback(postDomain));

// allow to form query in get: /domain/?name=something.
// an address should represent the path to the resource 
// and not on what parameters to get the resource. So, there
// is only one resource here and it is domain and hence, we 
// must use get request to the root and to filter use params.
domainRoutes.get('/', makeCallback(getDomain));
domainRoutes.get('/:id', makeCallback(getDomain));
domainRoutes.patch('/:id', makeCallback(patchDomain));

module.exports = domainRoutes;