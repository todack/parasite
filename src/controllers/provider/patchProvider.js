module.exports = function makePatchProvider({ editProvider }) {
    return async ( httpRequest ) => {
        const patched = await editProvider({
            ...httpRequest.body,
            _id: httpRequest.params.id
        });
        return {
            statusCode: 200,
            body: patched
        }
    }
}