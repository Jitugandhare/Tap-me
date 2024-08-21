const CoinCounter = require('../model/CoinCounter.model');

exports.getCoinCount = async (req, res) => {
    try {
        const coinData = await CoinCounter.findOne();
        if (!coinData) {
            return res.status(404).json({ message: 'Coin data not found' });
        }
        res.json({ coinCount: coinData.coinCount });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.incrementCoinCount = async (req, res) => {
    try {
        let coinData = await CoinCounter.findOne();
        if (!coinData) {
            coinData = new CoinCounter();
        }

        coinData.coinCount += 1;
        await coinData.save();
        res.json({ message: 'Coin count updated', coinCount: coinData.coinCount });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
