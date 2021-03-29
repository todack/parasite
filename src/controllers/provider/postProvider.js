module.exports = function makePostProvider({ addProvider }) {
    return async ( httpRequest ) => {
        const created = await addProvider(httpRequest.body);
        return {
            statusCode: 201,
            body: created
        }
    }
}