const mongoose = require('mongoose');
const { dbUrl } = require('../config');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
};

module.exports = async () => {
    return await mongoose.connect(dbUrl, options);
};

