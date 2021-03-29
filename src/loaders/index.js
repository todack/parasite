const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');
const { logger } = require('../helpers');

module.exports = async function initLoaders(){

    // Load express.
    const app = expressLoader();
    logger.info("Express loaded successfully.");

    // Load mongoose.
    const db = await mongooseLoader();
    logger.info("Database connected and loaded successfully.");

    return { app, db };
}
