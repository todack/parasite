const { NotfoundError } = require('../../../helpers');

module.exports = function makeListDomain({ domainQueries }) {
    return async ({ _id, name, className }) => {

        let domain;

        if (_id) {
            domain = await domainQueries.findById({ _id });
        } else {
            let query = {};

            if (name) query.name = name;
            if (className) query.className = className;

            domain = await domainQueries.findAll(query);
        }

        if (!domain) {
            throw new NotFoundError("domain", _id);
        }

        return domain;
    }
}