exports.addProducts = (req, res, next) => {
    res.render('add-product',
    {
        pageTitle: 'Add Product',
        hasCSS: true
    });
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button>Add Product</button></form>');
};

