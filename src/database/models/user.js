const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    },
    method: {
        type: String,
        required: true
    }
});

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:  String, 
        required: true,
        select: false
    },
    username: {
        type: String,
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
    accessToken: {
        type: String,
        required: true,
        unique: true
    },
    remainingCalls: {
        type: Number,
        required: true,
        default: 0
    },
    purchases: {
        type: [{ purchaseSchema }],
    },
    isPrivate: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', userSchema);