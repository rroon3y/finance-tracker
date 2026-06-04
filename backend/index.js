const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const transactionRoutes = require('./routes/transaction');
app.use('/api/transactions', transactionRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected!'))
    .catch((err) => console.log('Connection failed:', err));

// Test route
app.get('/', (req, res) => {
    res.send('Finance Tracker API is running!');
});

// Local dev only
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Vercel needs this
module.exports = app;