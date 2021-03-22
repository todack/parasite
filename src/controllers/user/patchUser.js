module.exports = function makePatchUser({ editUser }) {
    return async ( httpRequest ) => {
        const toEdit = {
            ...httpRequest.body,
            email: httpRequest.params.email
        }
        const patched = await editUser(toEdit);
        return {
            statusCode: 200,
            patched
        }
    }
}