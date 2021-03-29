const { MissingPropertyError, InvalidPropertyError }

module.exports = function buildMakeProvider({ isValidUrl, isValidFormat }) {
    return ({
        authorId,
        domainId,
        sourceUrl,
        requiresAuth = false,
        accessToken = null,
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

        if (!sourceUrl) {
            throw new MissingPropertyError("sourceUrl", sourceUrl);
        }

        if (requiresAuth && !accessToken) {
            throw new MissingPropertyError("accessToken", accessToken);
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
            getSourceUrl: () => sourceUrl,
            requiresAuth: () => requiresAuth,
            getAccessToken: () => accessToken,
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