const express = require('express');
const { getCoinCount, incrementCoinCount } = require('../controller/Coin.controller');

const router = express.Router();

router.get('/', getCoinCount);

router.post('/increment', incrementCoinCount);

module.exports = router;
