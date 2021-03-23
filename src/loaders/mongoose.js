const mongoose = require('mongoose');
const { dbUrl } = require('../config');
const logger = require('./winston');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
};

module.exports = async () => {
    try {
        await mongoose.connect(config.dbUrl, options);
        logger.info('Database connection successful!');
    } catch (e) {
        logger.error('Database connection failed!');
        process.exit(1);
    }
};

