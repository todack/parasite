module.exports = function makeListDomain({ domainQueries }) {
    return async ({ name }) => {
        
        if (!name) {
            throw new Error(`Name must be provided, received: ${name}`);
        }

        const domain = await domainQueries.findByName({ name });

        if (!domain) {
            throw new Error(`Domain with provided name doesn't exist`);
        }

        return domain;
    }
}