const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const Route404 = require('./routes/404');

app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

// const server = http.createServer((req, res) => {
//     res.write("<h1>Node.js working</h1>");
//     return res.end();
// });

// app.use((req, res, next) => {
//     console.log('In the middle ware');
//     next();
// });

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);
app.use(Route404);

console.log("server started at port 3000");
app.listen(3000);