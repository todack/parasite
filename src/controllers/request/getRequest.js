module.exports = function makeGetRequest({ requestStatus }) {
    return async ( httpRequest ) => {
        let status = await requestStatus({
            _id: httpRequest.params.requestId
        });
        return {
            statusCode: 200,
            body: status
        }
    }
}