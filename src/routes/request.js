const { Router } = require('express');
const makeCallback = require('../helpers/makeCallback');
const { getService } = require('../controllers/request');

const requestRoutes = Router();

requestRoutes.get('/:domain', makeCallback(getService));

module.exports = requestRoutes;