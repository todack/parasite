module.exports = function buildMakeDomain({ isValidDomainName }) {
    return ({
        name,
        className,
        shortDesc,
        longDesc,
    }) => {

        // Write business logic and validation here.
        if (!name) {
            throw new Error(`Domain name is required, received: ${name}`);
        }

        if (!isValidDomainName({ name })){
            throw new Error(`Invalid domain name, received: ${name}`);
        }

        if (!className) {
            throw new Error(`Class name of domain is required, received: ${className}`);
        }

        if (!shortDesc) {
            throw new Error(`A short description of the domain is required, received: ${shortDesc}`);
        }

        if (shortDesc.length > 80) {
            throw new Error(`Short Description is too long`);
        }

        if (!longDesc) {
            throw new Error(`A long description of the domain is required, received: ${longDesc}`);
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