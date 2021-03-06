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
            if (!req.headers.authorization) {
                throw new AuthenticationError('Credentials not provided');
            }

            const [ mode, ...creds ] = req.headers.authorization.split(" ");

            if (mode === 'Basic') {
                const [ email, password ] = Buffer.from(creds[0], 'base64').toString('utf-8').split(':');
                let ret = await authUser({ email, password });
                
                if (ret) {
                    req.body.email = email;
                    next();
                } else next(new AuthenticationError('Invalid credentials'));

            } else if (mode === 'Bearer') {
                console.log("token used, ", creds);
                next();

            } else {
                next(new AuthenticationError('Invalid authorization scheme'));
            }

        } catch(e) {
            next(new InternalServerError(e.message));
        }
    }
}