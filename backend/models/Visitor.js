const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        default: 'Unknown'
    },
    city: String,
    country: String,
    platform: {
        type: String,
        default: 'Unknown'
    },
    userAgent: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Visitor', VisitorSchema);
