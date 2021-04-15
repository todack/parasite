const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    domainId: {
        type: mongoose.Types.ObjectId,
        ref: 'Domain',
        required: true
    },
    mode: {
        type: String,
        required: true
    }, 
    sourceType: {
        type: String,
        required: true
    },
    source: {
        type: Map,
        required: true
    },
    result: {
        type: Map, 
        required: true
    },
    status: {
        type: String,
        require: true 
    }
});

module.exports = mongoose.model('Request', requestSchema);