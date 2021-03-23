const { makeProvider } = require('../../entities');

module.exports = function makeAddProvider({ providerQueries }) {
    return async ( providerData ) => {
        const provider = makeProvider({ 
            ...providerData,
            hits: undefined,
            misses: undefined
        });
        const sourceUrlExists = await providerQueries.findAll({ sourceUrl: provider.getSourceUrl() });
        
        if (sourceUrlExists.length > 0) {
            throw new Error(`Provider with the given source URL already exists`);
        }

        const datasetSignatureExists = await providerQueries.findAll({ datasetSignature: provider.getDatasetSignature() });

        if (datasetSignatureExists) {
            // For now just keep this aside.
            // throw new Error(`Provider with the given dataset signature already exists`);
        }

        return providerQueries.insert({
            authorId: provider.getAuthorId(),
            domainId: provider.getDomainId(),
            sourceUrl: provider.getSourceUrl(),
            requiresAuth: provider.requiresAuth(),
            accessToken: provider.getAccessToken(),
            format: provider.getFormat(),
            description: provider.getDescription(),
            hits:  provider.getHits(),
            misses: provider.getMisses(),
            datasetSignature: provider.getDatasetSignature()
        });
    }
}