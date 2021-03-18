const { Router } = require('express');

const userRoutes = require('./user');
const domainRoutes = require('./domain');
const providerRoutes = require('./provider');

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