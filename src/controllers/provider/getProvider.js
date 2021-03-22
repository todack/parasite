module.exports = function makeGetProvider({ listProvider }) {
    return async ( httpRequest ) => {
        const providerDetails = await listProvider({
            _id:httpRequest.params.id,
            ...httpRequest.query,
        });
        return {
            statusCode: 200,
            body: providerDetails
        }
    }
}