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
            throw new Error(`Author ID is required, received: ${authorId}`);
        }

        if (!domainId) {
            throw new Error(`Domain ID is required, received: ${domainId}`);
        }

        if (!sourceUrl) {
            throw new Error(`A source URL is required, received: ${sourceUrl}`);
        }

        if (requiresAuth && !accessToken) {
            throw new Error(`Access token not specified for provider that requires authentication`);
        }

        if (!isValidUrl({ url: sourceUrl })) {
            throw new Error(`Source URL is not valid, received: ${sourceUrl}`);
        }

        if (!isValidFormat({ format })) {
            throw new Error(`Invalid format provided, received: ${format}`);
        }

        if (!description) {
            throw new Error(`A description about the provider is required, received: ${description}`);
        }

        if (!datasetSignature) {
            throw new Error(`Dataset signature is required, recieved: ${datasetSignature}`);
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