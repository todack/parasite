const makeHttpRequest = require('./makeHttpRequest');

module.exports = function makeCallback( controller ) {
    return async (req, res, next) => {
        try {
            const httpResponse = await controller(makeHttpRequest(req));
            if (httpResponse.headers){
                res.set(httpResponse.headers);
            }
            res.type('json');
            res.status(httpResponse.statusCode).send(httpResponse.body);
        } catch(e) {
            next(e);
        } 
    }
}