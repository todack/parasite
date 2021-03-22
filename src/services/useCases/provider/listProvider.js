module.exports = function makeListProvider({ providerQueries }) {
    return async ({ _id, author, domain, requiresAuth, format }) => {

        let provider;

        if (_id) {
            provider = await providerQueries.findById({ _id });
        } else {
            let query = {};

            if (author) query.author = author;
            if (domain) query.domain = domain;
            if (requiresAuth) query.requiresAuth = requiresAuth;
            if (format) query.format = format;

            // Empty query means find all providers.
            provider = await providerQueries.findAll(query);
        }

        if (!provider) {
            throw new Error(`Provider with the given id doesnt't exists`);
        }

        return provider;
    }
}