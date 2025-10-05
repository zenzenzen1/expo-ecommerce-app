const CartItem = require('../models/CartItem');
const { createUser, getUserByFirebaseId } = require('../services/userService');

exports.getCart = async (req, res) => {
    const firebaseId = req.query.firebaseId + "";
    let user = await getUserByFirebaseId(firebaseId);
    if (!user) {
        user = await createUser({ firebaseId })
    }
    const cart = await CartItem.find({ userId: user._id });
    res.json(cart);
};

exports.addToCart = async (req, res) => {
    const item = new CartItem(req.body);
    await item.save();
    res.status(201).json(item);
};

exports.updateCartItem = async (req, res) => {
    const item = await CartItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Cart item not found' });
    res.json(item);
};

exports.deleteCartItem = async (req, res) => {
    const result = await CartItem.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Cart item not found' });
    res.json({ message: 'Cart item deleted' });
};
