const mongoose = require('mongoose');
const { db } = require('../config');
const logger = require('./winston');

const DB_URI = `https://mongodb+srv://${db.username}:${db.password}@${db.cluster}.mongodb.net/${db.dbname}?retryWrites=true&w=majority`;
const options = {

};

module.exports = async () => {

    try {
        await mongoose.connect(DB_URI, options);
        logger.info('Database connection successful!');
    } catch (e) {
        logger.error('Database connection failed!');
        process.exit(1);
    }
};

