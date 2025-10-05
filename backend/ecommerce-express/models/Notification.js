const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: String // You can also convert this to Date
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);