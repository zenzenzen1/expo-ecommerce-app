const mongoose = require('mongoose');
const { shopSchema } = require('./Shop');

const productSchema = mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    shopId: { type: mongoose.Schema.Types.ObjectId, ref: "Shop", required: true },
    shop: shopSchema,
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    images: [String],
    category: {
        id: Number,
        name: String,
        image: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);