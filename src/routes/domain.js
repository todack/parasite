const { Router } = require('express');

const domainRoutes = Router();

domainRoutes.get('/', (req, res) => {
    res.send('Working...');
})

module.exports = domainRoutes;