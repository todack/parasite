module.exports = function makePatchUser({ editUser }) {
    return async ( httpRequest ) => {
        const toEdit = {
            ...httpRequest.body,
            email: httpRequest.params.email
        }
        const patched = await editUser(toEdit);
        console.log("patched", patched);
        return {
            statusCode: 200,
            patched
        }
    }
}