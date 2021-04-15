module.exports = function makeGetRequest({ requestStatus }) {
    return async ( httpRequest ) => {
        let status = await requestStatus({
            _id: httpRequest.params.id
        });
        return {
            statusCode: 200,
            body: status
        }
    }
}