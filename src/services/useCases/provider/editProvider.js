const { makeProvider } = require('../../entities');
const { MissingPropertyError, NotFoundError } = require('../../../helpers');

module.exports = function makeEditProvider({ providerQueries }) {
    return async ({ _id, ...changes }) => {

        if (!_id) {
            throw new MissingPropertyError("id", _id);
        }

        const existing = await providerQueries.findById({ _id });

        if (!existing) {
            throw new NotFoundError("provider", _id);
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
            auth: updated.getAuth(),
            format: updated.getFormat(),
            description: updated.getDescription(),
            hits:  updated.getHits(),
            misses: updated.getMisses(),
            datasetSignature: updated.getDatasetSignature()
        });
    } 
}