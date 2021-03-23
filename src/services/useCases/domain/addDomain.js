const { makeDomain } = require('../../entities');

module.exports = function makeAddDomain({ domainQueries }) {
    return async ( domainData ) => {
        const domain = makeDomain(domainData);
        const exists = await domainQueries.findByName({ name: domain.getName() });
        
        if (exists) {
            throw new Error(`Provided domain already exists`);
        }

        return domainQueries.insert({
            name: domain.getName(),
            className: domain.getClassName(),
            shortDesc: domain.getShortDesc(),
            longDesc: domain.getLongDesc(),
        });
    }
}