const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    className: {
        type: String,
        required: true
    },
    shortDesc: {
        type: String,
        required: true
    },
    longDesc: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Domain', domainSchema);