const express = require("express");
const cors = require('cors')
    //const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const btoa = require('btoa');
const port = 3000;
const auth = { login: 'admin', password: 'password' };

// DB
const db = require("../back/config/database");

//services Test
const adminService = require("../back/services/adminService");
// const authService = require("../back/services/authenticationService")

// test database connection
db.authenticate().then(() => console.log("Khoda bozorge")).catch(err => console.log("Ghalat kardam " + err.message));

const app = express();
app.use(cors());
app.use(bodyParser.json());

// get all books
app.get('/getAllBooks', async(req, res) => {
    console.log(req.query);
    const allBooks = await adminService.getAllBooks(1, 10);
    res.send(allBooks);
});

// get all authors
app.get('/getAllAuthors', async(req, res) => {
    console.log(req.query);
    const allAuthors = await adminService.getAllAuthors(1, 10);
    res.send(allAuthors);
});

// get all publishers
app.get('/getAllPublishers', async(req, res) => {
    console.log(req.query);
    const allPublishers = await adminService.getAllPublishers(1, 10);
    res.send(allPublishers);
});

// get all categories
app.get('/getAllCategories', async(req, res) => {
    console.log(req.query);
    const allCategories = await adminService.getAllCategories();
    res.send(allCategories);
});

// create new author
app.use('/admin/createAuthor', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const newCategory = await adminService.createAuthor(req.body);
        res.send(newCategory);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});


// create new category
app.use('/admin/createCategory', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const newCategory = await adminService.createCategory(req.body);
        res.send(newCategory);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});