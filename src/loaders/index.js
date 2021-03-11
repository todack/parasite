const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');
const logger = require('./winston');

exports.initLoaders = async () => {

    // Load express
    const app = expressLoader();

    // Load mongoose
    // await mongooseLoader();

    return app;
};

exports.logger = logger;