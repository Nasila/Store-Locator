const express = require('express');
const router = express.Router();
const {itemsList,updateCart,getCartList,addUser} = require('./controllers/itemsController');

router.get('/products', itemsList);

router.post('/add-user',addUser);
router.post('/update-cart',updateCart);
router.get('/get-cart/:email', getCartList);
module.exports = router;