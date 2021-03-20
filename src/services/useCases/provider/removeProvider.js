module.exports = function makeRemoveProvider({ providerQueries }) {
    return async ({ _id }) => {

        if (!_id) {
            throw new Error(`Id must be provided, received: ${_id}`);
        }

        const exists = await providerQueries.findById({ _id });

        if (!exists) {
            throw new Error(`Provider with the given id doesn't exist`);
        }

        return providerQueries.remove({ _id });
    }
}