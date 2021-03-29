const { makeDomain } = require('../../entities');
const { NotFoundError, MissingPropertyError } = require('../../../helpers');

module.exports = function makeEditDomain({ domainQueries }) {
    return async ({ _id, ...changes }) => {

        if (!_id) {
            throw new MissingPropertyError("id", _id);
        }

        if (!changes) {
            throw new MissingPropertyError(null, changes);
        }

        const existing = await domainQueries.findById({ _id });
        
        if (!existing) {
            throw new NotFoundError("domain", _id);
        }
                                                        
        const updatedDomain = makeDomain({ ...existing, ...changes });

        return domainQueries.update({
            ...existing,
            name: updatedDomain.getName(),
            className: updatedDomain.getClassName(),
            shortDesc: updatedDomain.getShortDesc(),
            longDesc: updatedDomain.getLongDesc(),
        });
    }
}