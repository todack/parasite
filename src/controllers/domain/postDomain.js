module.exports = function makePostDomain({ addDomain }) {
    return async ( httpRequest ) => {
        const created = addDomain(httpRequest.body);
        return {
            statusCode: 201,
            created
        }
    }
}