module.exports = function makeGetUser({ listUser }) {
    return async ( httpRequest ) => {
        const userDetails = await listUser({ email: httpRequest.params.email });
        return {
            statusCode: 200,
            body: userDetails
        }
    }
};