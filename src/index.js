const config = require('./config');
const initLoaders = require('./loaders');
const { logger } = require('./helpers');

async function startServer() {

    const { app } = await initLoaders();

    app.listen(config.port, () => {
        logger.info(`Server listening on port: ${config.port}`);
    });
}

try {
    startServer();
} catch(e) {
    logger.error(e);
    process.exit(1);
}