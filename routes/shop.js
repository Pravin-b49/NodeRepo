const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.post('/create-product', shopController.createProduct);
router.get('/product_list', shopController.getProducts);
router.get('/getproduct', shopController.getEditProduct);
router.post('/edit-product', shopController.postEditProduct);
router.get('/delete_product', shopController.getDeleteProduct);

module.exports = router;
