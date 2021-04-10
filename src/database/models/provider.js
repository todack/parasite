const mongoose = require('mongoose');

// Right now supports only token based auth.
const providerSchema = new mongoose.Schema({
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    domainId: {
        type: mongoose.Types.ObjectId,
        ref: 'Domain',
        required: true
    },
    sourceUrl: {
        type: String,
        required: true
    },
    auth: {
        type: Map,
        require: true
    },
    format: {
        type: String, // api, github
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hits: {
        type: Number,
        default: 0
    },
    misses: {
        type: Number,
        default: 0
    },
    datasetSignature: {
        type: String
    }
});

module.exports = mongoose.model('Provider', providerSchema);