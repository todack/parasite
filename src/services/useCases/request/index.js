const makeProcessRequest = require('./processRequest');
const makeRequestStatus = require('./requestStatus');
const gatherAndEvaluateResults = require('../../common/gatherAndEvaluateResults');
const { providerQueries, requestQueries } = require('../../../database');

const processRequest = makeProcessRequest({ providerQueries, requestQueries, gatherAndEvaluateResults });
const requestStatus = makeRequestStatus({ requestQueries });

module.exports = Object.freeze({
    processRequest,
    requestStatus
});