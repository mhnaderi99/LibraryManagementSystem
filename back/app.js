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
const userService = require("../back/services/userService");
// const authService = require("../back/services/authenticationService")

// test database connection
db.authenticate().then(() => console.log("Khoda bozorge")).catch(err => console.log("Ghalat kardam " + err.message));

const app = express();
app.use(cors());
app.use(bodyParser.json());

/**
 * 
 * Admin services
 * 
 */
//
// Author
//
// create new author
app.use('/admin/createAuthor', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const newAuthor = await adminService.createAuthor(req.body);
        res.send(newAuthor);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});

// edit author
app.use('/admin/editAuthor', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const editedAuthor = await adminService.editAuthor(req.body);
        res.send(editedAuthor);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
//
// Category
//
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

// edit category
app.use('/admin/editCategory', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const editedCategory = await adminService.editCategory(req.body);
        res.send(editedCategory);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
/**
 * 
 * User services
 * 
 */
//
// Book
//
// get all books
app.get('/getAllBooks', async(req, res) => {
    console.log(req.query);
    const allBooks = await userService.getAllBooks(1, 10);
    res.send(allBooks);
});
//
// Author
//
// get all authors
app.get('/getAllAuthors', async(req, res) => {
    console.log(req.query);
    const allAuthors = await userService.getAllAuthors(1, 10);
    res.send(allAuthors);
});
// get author by name
app.get('/getAuthorByName', async(req, res) => {
    console.log(req.query);
    const authors = await userService.getAuthorByName(req.body.name, 1, 10);
    res.send(authors);
});

// get author by nationality
app.get('/getAuthorByNationality', async(req, res) => {
    console.log(req.query);
    const authors = await userService.getAuthorByNationality(req.body.nationality, 1, 10);
    res.send(authors);
});
//
// publisher
//
// get all publishers
app.get('/getAllPublishers', async(req, res) => {
    console.log(req.query);
    const allPublishers = await userService.getAllPublishers(1, 10);
    res.send(allPublishers);
});
//
// Category
//
// get all categories
app.get('/getAllCategories', async(req, res) => {
    console.log(req.query);
    const allCategories = await userService.getAllCategories();
    res.send(allCategories);
});
// get category by name
app.get('/getCategoryByName', async(req, res) => {
    console.log(req.query);
    const categories = await userService.getCategoryByName(req.body.name, 1, 10);
    res.send(categories);
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});