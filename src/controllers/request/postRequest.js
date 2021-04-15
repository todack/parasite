// Controllers return an httpResponse with headers(optional), body and statusCode.

module.exports = function makePostService({ processRequest }) {
    return async ( httpRequest ) => {
        const inferenceResults = await processRequest({
            ...httpRequest.body,
            source: httpRequest.file
        });
        return {
            statusCode: 200,
            body: inferenceResults
        }
    }
}