module.exports = function makePostDomain({ addDomain }) {
    return async ( httpRequest ) => {
        const created = await addDomain(httpRequest.body);
        return {
            statusCode: 201,
            body: created
        }
    }
}