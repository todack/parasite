const { Router } = require('express');

const userRoutes = require('./userRoutes');
const domainRoutes = require('./domainRoutes');
const providerRoutes = require('./providerRoutes');

const routes = Router();

// Routes for health monitoring.

routes.get('/', (req, res) => {
    res.send('Active');
});

routes.head('/', (req, res) => {
    res.status(200).end();
});

// Routes for services.

routes.use('/user', userRoutes);
routes.use('/domain', domainRoutes);
routes.use('/provider', providerRoutes);

module.exports = routes;