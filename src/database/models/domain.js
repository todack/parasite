const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    shortDesc: {
        type: String,
        required: true
    },
    fullDesc: {
        type: String,
        required: true
    },
    providers: {
        type: [{ type: mongoose.Types.ObjectId, ref: 'Provider' }],
        default: []
    }
});

domainSchema.virtual('providersCount').get(function(){
    return this.providers.length;
});

module.exports = mongoose.model('Domain', domainSchema);