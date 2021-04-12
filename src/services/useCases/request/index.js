const makeProcessRequest = require('./processRequest');
const makeRequestStatus = require('./requestStatus');

const processRequest = makeProcessRequest({});
const requestStatus = makeRequestStatus({});

module.exports = Object.freeze({
    processRequest,
    requestStatus
});