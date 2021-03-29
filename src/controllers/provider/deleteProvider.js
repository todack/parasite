module.exports = function makeDeleteProvider({ removeProvider }) {
    return async ( httpRequest ) => {
        const deleted = await removeProvider({ _id: httpRequest.params.id });
        return {
            statusCode: 200,
            body: deleted
        }
    }
}