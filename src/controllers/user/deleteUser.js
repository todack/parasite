module.exports = function makeDeleteUser({ removeUser }) {
    return async ( httpRequest ) => {
        const deleted = await removeUser({ email: httpRequest.params.email });
        return {
            statusCode: 200,
            deleted
        }
    }
}