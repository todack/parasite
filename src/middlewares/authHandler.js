const { AuthenticationError, InternalServerError } = require('../helpers');

module.exports = function makeAuthHandler({ authUser }) {
    return async (req, res, next) => {
        // Credentials will always be in headers.
        // Three modes in which you can authenticate or authorize.
        
        // Authenticate
        // 1. Authorization: Basic base64decode(email:password);
        // 2. Authorization: Bearer JWT

        // Authorize
        // 1. Authorization: Basic base64decode(email:password);
        // 2. Authorization: Bearer API-KEY

        try {
            const [ mode, creds ] = req.headers.authorization.split(" ");
            const [ email, password ] = Buffer.from(creds, 'base64').toString('utf-8').split(':');

            if (mode === 'Basic') {
                let res = await authUser({ email, password });
                
                if (res) next();
                else next(new AuthenticationError('Invalid credentials'));

            } else if (mode === 'Bearer') {

            } else {
                next(new AuthenticationError('Invalid authorization scheme'));
            }

        } catch(e) {
            next(new InternalServerError(e.message));
        }
    }
}