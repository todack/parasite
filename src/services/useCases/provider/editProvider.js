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

        const updated = makeProvider({ ...existing, ...changes, accessToken: null });

        return providerQueries.update({
            author: updated.getAuthor(),
            domain: updated.getDomain(),
            sourceUrl: updated.getSourceUrl(),
            requiresAuth: updated.requiresAuth(),
            accessToken: updated.getAccessToken(),
            format: updated.getFormat(),
            desc: updated.getDesc(),
            hits:  updated.getHits(),
            misses: updated.getMisses(),
            datasetSignature: updated.getDatasetSignature()
        });
    } 
}