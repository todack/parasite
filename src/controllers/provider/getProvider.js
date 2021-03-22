module.exports = function makeGetProvider({ listProvider }) {
    return async ( httpRequest ) => {
        const providerDetails = await listProvider({
            ...httpRequest.params,
            ...httpRequest.query
        });
        return {
            statusCode: 200,
            body: providerDetails
        }
    }
}