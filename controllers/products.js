const products = []

exports.getAddProduct = (req, res, next) => {
    // console.log("Another middleware");
    /* res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); */
    /* res.sendFile(path.join(rootDir, 'views', 'add-product.html')); */
    res.render('add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        formCSS: true, 
        productCSS: true, 
        activeAddProduct: true})
}

exports.postAddProduct = (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    // console.log("Another middleware");
    /* res.sendFile(path.join(__dirname, '../' ,'views', 'shop.html')); */

/*     console.log(adminData.products)
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); */

    // const products = adminData.products

    res.render('shop', 
        {prods: 
            products, 
            pageTitle: 'Shop', 
            path: '/', hasProducts: 
            products.length > 0, 
            activeShop: true, 
            productCss: true
        });
}