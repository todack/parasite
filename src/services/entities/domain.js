const { MissingPropertyError, InvalidPropertyError } = require('../../helpers');

module.exports = function buildMakeDomain({ isValidDomainName }) {
    return ({
        name,
        className,
        shortDesc,
        longDesc,
    }) => {

        // Write business logic and validation here.
        if (!name) {
            throw new MissingPropertyError("name", name);
        }

        if (!isValidDomainName({ name })){
            throw new InvalidPropertyError("name is not correctly formatted", name);
        }

        if (!className) {
            throw new MissingPropertyError("className", className);
        }

        if (!shortDesc) {
            throw new MissingPropertyError("shortDesc", shortDesc);
        }

        if (shortDesc.length > 80) {
            throw new InvalidPropertyError(`shortDesc is too long`, shortDesc);
        }

        if (!longDesc) {
            throw new MissingPropertyError("longDesc", longDesc);
        }

        // Define setter carefully. Check for validation, or create an entire new object.
        return Object.freeze({
            getName: () => name,
            getClassName: () => className,
            getShortDesc: () => shortDesc,
            getLongDesc: () => longDesc,
        });
    }
}