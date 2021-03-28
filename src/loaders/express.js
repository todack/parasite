const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const config = require('../config');
const routes = require('../routes');

module.exports = () => {

    const app = express();

    // Security and addons
    app.use(helmet());

    // Cors as it says.
    app.use(cors());

    // Parsers
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Routes
    app.use(config.apiPrefix, routes);

    // Error handlers

    return app;
}