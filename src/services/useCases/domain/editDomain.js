const { makeDomain } = require('../../entities');

module.exports = function makeEditDomain({ domainQueries }) {
    return async ({ name, ...changes }) => {

        if (!name) {
            throw new Error(`Name must be provided, received: ${name}`);
        }

        if (!changes) {
            throw new Error(`Changes either not specified or not allowed`);
        }

        const existing = await domainQueries.findByName({ name });
        
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