const { createLogger, format, transports, config } = require('winston');

module.exports = function makeLogger(){
    const logger = createLogger({
        level: 'info',
        format: format.json(),
        transports: [
            new transports.File({ filename: 'error.log', level: 'error' }),
            new transports.File({ filename: 'combined.log' })
        ]
    });

    // If we're not in production then let's log to console.

    if (config.nodeEnv !== 'production') {
        logger.add(new transports.Console({
            format: format.simple()
        }));
    }

    return logger;
}
