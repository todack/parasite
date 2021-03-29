const { makeProvider } = require('../../entities');
const { IllegalResourceCreationError } = require('../../../helpers');

module.exports = function makeAddProvider({ providerQueries }) {
    return async ( providerData ) => {
        const provider = makeProvider({ 
            ...providerData,
            hits: undefined,
            misses: undefined
        });
        const sourceUrlExists = await providerQueries.findAll({ sourceUrl: provider.getSourceUrl() });
        
        if (sourceUrlExists.length > 0) {
            throw new IllegalResourceCreationError("sourceUrl", provider.getSourceUrl());
        }

        const datasetSignatureExists = await providerQueries.findAll({ datasetSignature: provider.getDatasetSignature() });

        if (datasetSignatureExists) {
            // For now just keep this aside.
            // throw new IllegalResourceCreationError("provider", value);
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