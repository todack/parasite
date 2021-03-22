module.exports = async function makeGetUser({ listUser }) {
    return ( httpRequest ) => {
        const userDetails = await listUser({ email: httpRequest.params.email });
        return {
            statusCode: 200,
            body: userDetails
        }
    }
};