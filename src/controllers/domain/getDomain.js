module.exports = function makeGetDomain({ listDomain }) {
    return async ( httpRequest ) => {
        // If the first route doesn't matches then params.id will be 
        // undefined and hence will be matched with id in query of just 
        // name and className if specified. 
        const domainDetails = await listDomain({
            _id: httpRequest.params.id,
            ...httpRequest.query,
        });
        return {
            statusCode: 200,
            body: domainDetails
        }
    }
}