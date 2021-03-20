const mongoose = require('mongoose');

// Right now supports only token based auth.
const providerSchema = new mongoose.Schema({
    author: {
        type: { type: mongoose.Types.ObjectId, ref: 'User' },
        required: true
    },
    domain: {
        type: { type: mongoose.Types.ObjectId, ref: 'Domain' },
        required: true
    },
    sourceUrl: {
        type: String,
        required: true
    },
    requiresAuth: {
        type: Boolean,
        default: false
    },
    accessToken: {
        type: String,
    },
    format: {
        type: String, // api, github
        required: true
    },
    desc: {
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