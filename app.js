/* const http = require('http'); */

const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const adminData = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
    /* res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html')) */
    res.status(404).render('404', { pageTitle: 'Page Not Found'});
})

app.listen(3000);

/* app.use((req, res, next) => {
    console.log("In the middleware");
    next();
}); */
// next allows the request to continue to the next middleware in line

/* app.use('/', (req, res, next) => {
    console.log("Running");
    next();
}); */
    // ^ this always runs
/* 
app.use('/add-product', (req, res, next) => {
    // console.log("Another middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></input></form>');
});

// app.get...
app.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
}) */

/* app.use('/', (req, res, next) => {
    // console.log("Another middleware");
    res.send("<h1>Hello there</h1>");
}); */

/* const server = http.createServer(app);

server.listen(3000); */