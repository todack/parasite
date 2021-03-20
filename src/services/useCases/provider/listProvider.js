module.exports = function makeListProvider({ providerQueries }) {
    return async ({ _id }) => {
        
        if (!_id) {
            throw new Error(`Id must be provided, received: ${_id}`);
        }

        const provider = await providerQueries.findById({ _id });

        if (!provider) {
            throw new Error(`Provider with the given id doesnt't exists`);
        }

        return provider;
    }
}