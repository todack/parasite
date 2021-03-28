// follows the middleware structure.

module.exports = function makeAuth({ authUser }) {
    return (req, res, next) => {
        // Credentials will always be in headers.
        // Three modes in which you can authenticate or authorize.
        // Authenticate
        // 1. Authorization: Basic base64decode(email:password);
        // 2. Authorization: Bearer JWT

        // Authorize
        // 1. Authorization: Basic base64decode(email:password);
        // 2. Authorization: Bearer API-KEY
        next();
    }
}