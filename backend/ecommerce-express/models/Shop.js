const mongoose = require('mongoose');

exports.shopSchema = mongoose.Schema({
    shopName: { type: String },
    photoUrl: { type: String },
}, { timestamps: true });

exports.Shop = mongoose.model('Shop', exports.shopSchema);