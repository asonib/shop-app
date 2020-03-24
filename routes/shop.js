const express = require('express');
const router = express.Router();
const path = require('path');

const adminRoutes = require('./admin');
router.get('/', (req, res, next) => {
    console.log(adminRoutes.products);
    res.render('shop', 
    {
        prods: adminRoutes.products, 
        pageTitle: 'My Shopping Cart'
    });
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;