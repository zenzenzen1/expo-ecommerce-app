const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    title: String,
    price: Number,
    quantity: Number,
    image: String,
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('CartItem', cartItemSchema);