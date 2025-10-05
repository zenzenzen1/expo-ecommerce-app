const fs = require('fs');
const dotenv = require('dotenv');
const Path = require('path');

dotenv.config();

// Connect to MongoDB
const Product = require('../models/Product');
const Category = require('../models/Category');
const CartItem = require('../models/CartItem');
const Notification = require('../models/Notification');
const User = require('../models/User');
const { Shop } = require('../models/Shop');

exports.seedDatabase = async () => {

    try {
        const seedFilePath = Path.join(__dirname, 'db.json');
        const rawData = fs.readFileSync(seedFilePath, 'utf-8');
        const data = JSON.parse(rawData);

        const products = await Product.find();
        if (
            products.length > 0
            && false
            // || true
        ) {
            console.log('Database already seeded. Exiting...');
        }
        else {
            const mongoose = require('mongoose');


            await mongoose
                .connect(process.env.MONGO_URI)
            await mongoose.connection.db.dropDatabase();

            // Clear existing data
            await CartItem.deleteMany();
            await Product.deleteMany();
            await Category.deleteMany();
            await Notification.deleteMany();
            await User.deleteMany();
            // Insert categories
            await Category.insertMany(data.categories);
            
            const shop = await Shop.insertOne({
                shopName: "Shop 1",
                photoUrl: "https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg?semt=ais_hybrid&w=740",
            })

            const seller = await User.insertOne({
                email: "saller1@gmail.com",
                firebaseId: "OzhAdbIqIWU6tONuRcX6K2buiZj2",
                shop: shop,
            })
            
            // Insert products (merge both lists)
            const allProducts = [...data.products, ...data.saleProducts].map(product => ({
                ...product,
                shopId: shop._id,
                shop: shop
            }));
            await Product.insertMany(allProducts);

            const user = await User.insertOne({
                email: "john@gmail.com",
            })
            // Insert cart items
            await CartItem.insertMany(data.cart.map(item => ({
                ...item,
                userId: user._id,
            })
            ));

            // Insert notifications
            await Notification.insertMany(data.notifications);



            console.log('✅ Database seeded successfully');
        }
    } catch (err) {
        console.error('❌ Seeding error:', err);
        process.exit(1);
    }

};

