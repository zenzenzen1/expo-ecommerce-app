const { Shop } = require("../models/Shop")

exports.getShopById = async (req, res) => {
    const shop = await Shop.findById(req.params.id);
    if (!shop) {
        return res.status(404).json({ message: 'Shop not found' });
    }
    res.json(shop);
}