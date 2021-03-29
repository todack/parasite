const { makeDomain } = require('../../entities');
const { IllegalResourceCreationError } = require('../../../helpers');

module.exports = function makeAddDomain({ domainQueries }) {
    return async ( domainData ) => {
        const domain = makeDomain(domainData);
        const exists = await domainQueries.findByName({ name: domain.getName() });
        
        if (exists) {
            throw new IllegalResourceCreationError("domain", domain.getName());
        }

        return domainQueries.insert({
            name: domain.getName(),
            className: domain.getClassName(),
            shortDesc: domain.getShortDesc(),
            longDesc: domain.getLongDesc(),
        });
    }
}