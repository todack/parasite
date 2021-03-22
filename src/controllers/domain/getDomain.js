module.exports = function makeGetDomain({ listDomain }) {
    return async ( httpRequest ) => {
        const domainDetails = await listDomain({
            ...httpRequest.params,
            ...httpRequest.query
        });
        return {
            statusCode: 200,
            body: domainDetails
        }
    }
}