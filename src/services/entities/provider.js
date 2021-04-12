const { MissingPropertyError, InvalidPropertyError } = require('../../helpers');

module.exports = function buildMakeProvider({ isValidUrl, isValidFormat }) {
    return ({
        authorId,
        domainId,
        name,
        sourceUrl,
        auth,
        format,
        description,
        hits = 0,
        misses = 0,
        datasetSignature = "imagenet-hash"
    }) => {

        // Write the business logic and validations here.
        if (!authorId) {
            throw new MissingPropertyError("authorId", authorId);
        }

        if (!domainId) {
            throw new MissingPropertyError("domainId", domainId);
        }

        if (!name){
            throw new MissingPropertyError("name", name);
        }

        if (!sourceUrl) {
            throw new MissingPropertyError("sourceUrl", sourceUrl);
        }

        if (!auth) {
            throw new MissingPropertyError("auth", auth);
        } else {
            if (!auth.kind) {
                throw new MissingPropertyError("auth.kind", auth.kind);
            } else {
                if (auth.kind === 'basic') {
                    if (!auth.username && !auth.password) {
                        throw new MissingPropertyError("auth.username and auth.password", undefined);
                    } else if (!auth.username) {
                        throw new MissingPropertyError("auth.password", auth.username);
                    } else if (!auth.password) {
                        throw new MissingPropertyError("auth.password", auth.password);
                    } 
                } else if (auth.kind === 'token') {
                    if (!auth.token) throw new MissingPropertyError("auth.token", auth.token);
                } else if (auth.kind !== 'none') {
                    throw new InvalidPropertyError("Invalid auth kind", auth.kind); 
                }
            }
        }

        if (!isValidUrl({ url: sourceUrl })) {
            throw new InvalidPropertyError("sourceUrl doesn't follow url scheme", sourceUrl);
        }

        if (!isValidFormat({ format })) {
            throw new InvalidPropertyError("format is unknown", format);
        }

        if (!description) {
            throw new MissingPropertyError("description", description);
        }

        if (!datasetSignature) {
            throw new MissingPropertyError("datasetSignature", datasetSignature);
        }

        return Object.freeze({
            getAuthorId: () => authorId,
            getDomainId: () => domainId,
            getName: () => name,
            getSourceUrl: () => sourceUrl,
            getAuth: () => auth,
            getFormat: () => format,
            getDescription: () => description,
            getHits: () => hits,
            incHits: () => ++hits,
            getMisses: () => misses,
            incMisses: () => ++misses,
            getDatasetSignature: () => datasetSignature
        });
    }
}