module.exports = function({ addUser }) {
    return async ( httpRequest ) => {
        // TODO: See if try-catch block is good or the 
        // express middleware is good.
        const created = await addUser(httpRequest.body);
        return {
            statusCode: 201,
            body: { created }
        }
    }
}