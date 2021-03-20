const { makeProvider } = require('../../entities');

module.exports = function makeAddProvider({ providerQueries }) {
    return async ( providerData ) => {
        const provider = makeProvider(providerData);
        const sourceUrlExists = providerQueries.findBySourceUrl({ sourceUrl: provider.getSourceUrl() });
        
        if (sourceUrlExists) {
            throw new Error(`Provider with the given source URL already exists`);
        }

        const datasetSignatureExists = await providerQueries.findByDatasetSignature({ datasetSignature: provider.getDatasetSignature() });

        if (datasetSignatureExists) {
            // For now just keep this aside.
            // throw new Error(`Provider with the given dataset signature already exists`);
        }

        return providerQueries.insert({
            author: provider.getAuthor(),
            domain: provider.getDomain(),
            sourceUrl: provider.getSourceUrl(),
            requiresAuth: provider.requiresAuth(),
            accessToken: provider.getAccessToken(),
            format: provider.getFormat(),
            desc: provider.getDesc(),
            hits:  provider.getHits(),
            misses: provider.getMisses(),
            datasetSignature: provider.getDatasetSignature()
        });
    }
}