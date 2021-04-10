const { NotFoundError } = require('../../../helpers');

module.exports = function makeListProvider({ providerQueries }) {
    return async ({ _id, authorId, domainId, requiresAuth, format }) => {

        let provider;

        if (_id) {
            provider = await providerQueries.findById({ _id });
        } else {
            let query = {};

            if (authorId) query.authorId = authorId;
            if (domainId) query.domainId = domainId;
            if (format) query.format = format;

            // Empty query means find all providers.
            provider = await providerQueries.findAll(query);
        }

        if (!provider) {
            throw new NotFoundError("provider", null);
        }

        return provider;
    }
}