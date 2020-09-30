const express = require('express');
const router = express.Router();
const {itemsList} = require('./controllers/itemsController');

router.get('/items', itemsList);


module.exports = router;