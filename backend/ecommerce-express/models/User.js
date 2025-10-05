const mongoose = require('mongoose');
const { shopSchema } = require('./Shop');

const userSchema = new mongoose.Schema({
    firebaseId: { type: String, unique: false, required: false },
    shop: {type: shopSchema, required: false},
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String
    },
    cartItems: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 1 }
        }
    ],
    orders: [
        {
            orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
            orderDate: Date,
            totalAmount: Number
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);