module.exports = function buildMakeProvider({ isValidUrl, isValidFormat, secretGen }) {
    return ({
        author,
        domain,
        sourceUrl,
        requiresAuth = false,
        accessToken = secretGen.generate(),
        format,
        description,
        hits = 0,
        misses = 0,
        datasetSignature
    }) => {

        // Write the business logic and validations here.
        if (!author) {
            throw new Error(`Author is required, received: ${author}`);
        }

        if (!domain) {
            throw new Error(`Domain is required, received: ${domain}`);
        }

        if (!sourceUrl) {
            throw new Error(`A source URL is required, received: ${sourceUrl}`);
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
            getAuthor: () => author,
            getDomain: () => domain,
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