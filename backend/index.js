const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const coinRoutes = require('./Routes/Coin.route');
const connectToDatabase = require('./DB/db');
const app = express();

// Middleware
app.use(express.json()); 
app.use(cors()); 
// Connect to MongoDB
connectToDatabase();

// Routes
app.use('/api/coins', coinRoutes); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
