const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log("Another middleware");
    /* res.sendFile(path.join(__dirname, '../' ,'views', 'shop.html')); */
    console.log(adminData.products)
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

// get looks for exact matching of path

module.exports = router