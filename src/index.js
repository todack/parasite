const config = require('./config');
const { initLoaders, logger } = require('./loaders');

async function startServer() {
    const app = await initLoaders();

    app.listen(config.port, (e) => {
        if (e) {
            logger.error(e);
            process.exit(1);
        }

        logger.info(`Server listening on port: ${config.port}`);
    });
}

startServer();