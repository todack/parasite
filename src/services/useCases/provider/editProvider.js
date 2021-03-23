const { makeProvider } = require('../../entities');

module.exports = function makeEditProvider({ providerQueries }) {
    return async ({ _id, ...changes }) => {

        if (!_id) {
            throw new Error(`Id must be provided, received: ${_id}`);
        }

        const existing = await providerQueries.findById({ _id });

        if (!existing) {
            throw new Error(`Provider with the given id doesn't exist`);
        }

        // Hits and missses cannot be updated externally.
        const updated = makeProvider({ 
            ...existing, 
            ...changes, 
            hits: existing.hits, 
            misses: existing.misses 
        });

        return providerQueries.update({
            authorId: updated.getAuthorId(),
            domainId: updated.getDomainId(),
            sourceUrl: updated.getSourceUrl(),
            requiresAuth: updated.requiresAuth(),
            accessToken: updated.getAccessToken(),
            format: updated.getFormat(),
            description: updated.getDescription(),
            hits:  updated.getHits(),
            misses: updated.getMisses(),
            datasetSignature: updated.getDatasetSignature()
        });
    } 
}