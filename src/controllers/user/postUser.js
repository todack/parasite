module.exports = async function({ addUser }) {
    return ( httpRequest ) => {
        // TODO: See if try-catch block is good or the 
        // express middleware is good.
        const { email, name } = httpRequest.body;
        const created = await addUser({ email, name });
        return {
            statusCode: 201,
            body: { created }
        }
    }
}