const { Router } = require('express');

const providerRoutes = Router();

providerRoutes.get('/', (req, res) => {
    res.send('Working...');
})

module.exports = providerRoutes;