const mongoose = require('mongoose');

const coinCounterSchema = new mongoose.Schema({
    coinCount: {
        type: Number,
        required: true,
        default: 0,
    },
});

const CoinCounter = mongoose.model('CoinCounter', coinCounterSchema);

module.exports = CoinCounter;
