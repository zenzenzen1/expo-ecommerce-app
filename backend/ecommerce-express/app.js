require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const swaggerDocs = require('./swagger');
const { connectDB } = require('./db/connectDB');
const { seedDatabase } = require('./seeds/seed');

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/shops', require('./routes/shopRoutes'));

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

swaggerDocs(app);

// Start server
seedDatabase()
    .finally(() => {
        app.listen(PORT, () => console.log(`Server running on http://${"localhost"}:${PORT}`));
    })