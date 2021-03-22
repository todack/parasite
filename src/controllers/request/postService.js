// Controllers return an httpResponse with headers(optional), body and statusCode.

module.exports = function makePostService({ someAlgorithm }) {
    return async ( httpRequest ) => {
        const inferenceResults = await someAlgorithm({
            ...httpRequest.body,
            domain: httpRequest.params.domain
        });
        return {
            statusCode: 200,
            body: inferenceResults
        }
    }
}