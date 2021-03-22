module.exports = async function makeDeleteUser({ removeUser }) {
    return ( httpRequest ) => {
        const deleted = await removeUser({ email: httpRequest.params.email });
        return {
            statusCode: 200,
            deleted
        }
    }
}