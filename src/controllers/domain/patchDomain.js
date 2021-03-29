module.exports = function makePatchDomain({ editDomain }) {
    return async ( httpRequest ) => {
        const toEdit = {
            ...httpRequest.body,
            _id: httpRequest.params.id
        }
        const patched = await editDomain(toEdit);
        return {
            statusCode: 200,
            body: patched
        }
    }
}