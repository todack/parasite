const { makeDomain } = require('../../entities');

module.exports = function makeEditDomain({ domainQueries }) {
    return async ({ _id, ...changes }) => {

        if (!_id) {
            throw new Error(`Name must be provided, received: ${_id}`);
        }

        if (!changes) {
            throw new Error(`Changes either not specified or not allowed`);
        }

        const existing = await domainQueries.findById({ _id });
        
        if (!existing) {
            throw new Error(`Domain with given name doesn't exists`);
        }

        const updatedDomain = makeDomain({ ...existing, ...changes });

        return domainQueries.update({
            name: updatedDomain.getName(),
            className: updatedDomain.getClassName(),
            shortDesc: updatedDomain.getShortDesc(),
            longDesc: updatedDomain.getLongDesc(),
        });
    }
}