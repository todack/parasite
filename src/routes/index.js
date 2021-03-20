const { Router } = require('express');

const userRoutes = require('./user');
const domainRoutes = require('./domain');
const providerRoutes = require('./provider');
const requestRoutes = require('./request');

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
routes.use('/request', requestRoutes);

module.exports = routes;