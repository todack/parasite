const { logger } = require('../helpers');

module.exports = function makeErrorHandler({ }) {
    return (error, req, res, next) => {
        logger.error(error);
        res.status(error.status || 500).json({
            error: error.message || "Internal server error"
        });
    }
}