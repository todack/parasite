const { makeRequest } = require('../../entities');

module.exports = function makeProcessRequest({ providerQueries, requestQueries, gatherAndEvaluateResults }) {
    return ({ mode, domainId, sourceType, source }) => {

        const request = makeRequest({ mode, domainId, sourceType, source });

        // Currently we support only single mode. 
        // If anyother mode will be passed then the 
        // state will be automatically rejected.

        const targetProviders = providerQueries.findAll({ domainId: request.getDomainId() });

        const savedRequest = requestQueries.insert({
            mode: request.getMode(),
            domainId: request.getDomainId(),
            sourceType: request.getSourceType(),
            source: request.getSource(),
            status: request.getStatus(),
            result: request.getResult()
        });

        gatherAndEvaluateResults({ targetProviders, request: savedRequest });

        return savedRequest;
    }
}