const { NotFoundError } = require('../../../helpers');

module.exports = function makeRemoveProvider({ providerQueries }) {
    return async ({ _id }) => {

        if (!_id) {
            throw new MissingPropertyError("id", _id);
        }

        const exists = await providerQueries.findById({ _id });

        if (!exists) {
            throw new NotFoundError("provider", _id);
        }

        return providerQueries.remove({ _id });
    }
}