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
// Book
//
// create new book
app.use('/admin/createBook', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const newBook = await adminService.createBook(req.body);
        res.send(newBook);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});

// edit book
app.use('/admin/editBook', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const editedBook = await adminService.editBook(req.body);
        res.send(editedBook);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// delete book
app.use('/admin/deleteBook', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const deleteBook = await adminService.deleteBook(req.body.id);
        res.send(deleteBook);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
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
// delete author
app.use('/admin/deleteAuthor', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const deleteAuthor = await adminService.deleteAuthor(req.body.id);
        res.send(deleteAuthor);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
//
// Publisher
//
// create new publisher
app.use('/admin/createPublisher', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const newAuthor = await adminService.createPublisher(req.body);
        res.send(newAuthor);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});

// edit publisher
app.use('/admin/editPublisher', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const editedAuthor = await adminService.editPublisher(req.body);
        res.send(editedAuthor);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// delete publisher
app.use('/admin/deletePublisher', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const deletePublisher = await adminService.deletePublisher(req.body.id);
        res.send(deletePublisher);

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
// delete category
app.use('/admin/deleteCategory', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const deleteCategory = await adminService.deleteCategory(req.body.id);
        res.send(deleteCategory);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});

//
// User
//
// create new user
app.use('/admin/createUser', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const newUser = await adminService.createUser(req.body);
        res.send(newUser);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});

// edit user
app.use('/admin/editUser', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const editedUser = await adminService.editUser(req.body);
        res.send(editedUser);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// delete user
app.use('/admin/deleteUser', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        //Admin access granted
        const deleteUser = await adminService.deleteUser(req.body.id);
        res.send(deleteUser);

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
// get book by title
app.get('/getBookByTitle', async(req, res) => {
    console.log(req.query);
    const books = await userService.getBookByTitle(req.body.title, 1, 10);
    res.send(books);
});
// get book by author
app.get('/getBookByAuthor', async(req, res) => {
    console.log(req.query);
    const books = await userService.getBookByAuthor(req.body.author, 1, 10);
    res.send(books);
});
// get book by category
app.get('/getBookByCategory', async(req, res) => {
    console.log(req.query);
    const books = await userService.getBookByCategory(req.body.category, 1, 10);
    res.send(books);
});
// get book by publisher
app.get('/getBookByPublisher', async(req, res) => {
    console.log(req.query);
    const books = await userService.getBookByPublisher(req.body.publisher, 1, 10);
    res.send(books);
});
// get book by year
app.get('/getBookByYear', async(req, res) => {
    console.log(req.query);
    const books = await userService.getBookByYear(req.body.year, 1, 10);
    res.send(books);
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
// get publisher by name
app.get('/getPublisherByName', async(req, res) => {
    console.log(req.query);
    const publishers = await userService.getPublisherByName(req.body.name, 1, 10);
    res.send(publishers);
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