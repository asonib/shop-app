const express = require('express');
const router = express.Router();
const path = require('path');

const addProductsController = require('../controllers/products');

const products = [];

router.get('/add-product', addProductsController.addProducts);
router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;