module.exports = function({ addUser }) {
    return async ( httpRequest ) => {
        // TODO: See if try-catch block is good or the 
        // express middleware is good.

        // Destructing becuase we need to keep quite a few things null.
        const { email, name } = httpRequest.body;
        const created = await addUser({ email, name });
        return {
            statusCode: 201,
            body: { created }
        }
    }
}