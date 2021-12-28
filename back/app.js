const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");
const path = require("path");
const btoa = require('btoa');
const port = 3000;
const adminAuth = { login: 'admin', password: 'password' };
const managerAuth = { login: 'manager', password: 'password' };
const librarianAuth = { login: 'librarian', password: 'password' };
const userAuth = { login: 'user', password: 'password' };

// DB
const library_admin_db = require("../back/config/library_admin_db");
const library_manager_db = require("../back/config/library_manager_db");
const librarian_db = require("../back/config/librarian_db");
const registered_user_db = require("../back/config/registered_user_db");
const unregistered_user_db = require("../back/config/unregistered_user_db");

//services Test
const adminService = require("../back/services/adminService");
const librarianService = require("../back/services/librarianService");
const managerService = require("../back/services/managerService");
const registeredUserService = require("./services/registeredUserService");
const unregisteredUserService = require("./services/unregisteredUserService");

library_admin_db.authenticate().then(() => console.log("library_admin_db: Khoda bozorge")).catch(err => console.log("Ghalat kardam " + err.message));
library_manager_db.authenticate().then(() => console.log("library_manager_db: Khoda bozorge")).catch(err => console.log("Ghalat kardam " + err.message));
librarian_db.authenticate().then(() => console.log("librarian_db: Khoda bozorge")).catch(err => console.log("Ghalat kardam " + err.message));
registered_user_db.authenticate().then(() => console.log("registered_user_db: Khoda bozorge")).catch(err => console.log("Ghalat kardam " + err.message));
unregistered_user_db.authenticate().then(() => console.log("unregistered_user_db: Khoda bozorge")).catch(err => console.log("Ghalat kardam " + err.message));

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

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
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

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
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
app.use('/admin/deleteBook', async(req, res, next) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const deleteBook = await adminService.deleteBook(req.body.id);
        if (deleteBook != null && deleteBook != undefined) {
            res.status(200);
            res.send(deleteBook.toString());
        } else {
            res.status(400);
            res.send("null");
        }

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

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
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

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
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

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const deleteAuthor = await adminService.deleteAuthor(req.body.id);
        if (deleteAuthor != null && deleteAuthor != undefined) {
            res.status(200);
            res.send(deleteAuthor.toString());
        } else {
            res.status(400);
            res.send("null");
        }

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

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const newPublisher = await adminService.createPublisher(req.body);
        res.send(newPublisher);

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

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const editedPublisher = await adminService.editPublisher(req.body);
        res.send(editedPublisher);

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

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const deletePublisher = await adminService.deletePublisher(req.body.id);
        if (deletePublisher != null && deletePublisher != undefined) {
            res.status(200);
            res.send(deletePublisher.toString());
        } else {
            res.status(400);
            res.send("null");
        }

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

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
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

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
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

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const deleteCategory = await adminService.deleteCategory(req.body.id);
        if (deleteCategory != null && deleteCategory != undefined) {
            res.status(200);
            res.send(deleteCategory.toString());
        } else {
            res.status(400);
            res.send("null");
        }
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

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
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

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
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

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const deleteUser = await adminService.deleteUser(req.body.id);
        if (deleteUser != null && deleteUser != undefined) {
            res.status(200);
            res.send(deleteUser.toString());
        } else {
            res.status(400);
            res.send("null");
        }

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
//
// Inventory
//
// create new inventory item
app.use('/admin/createInventoryItem', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const newItem = await adminService.createInventoryItem(req.body);
        res.send(newItem);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit inventory item
app.use('/admin/editInventoryItem', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const editedItem = await adminService.editInventoryItem(req.body);
        res.send(editedItem);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// delete inventory item
app.use('/admin/deleteInventoryItem', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const deletedItem = await adminService.deleteInventoryItem(req.body.id);
        if (deletedItem != null && deletedItem != undefined) {
            res.status(200);
            res.send(deletedItem.toString());
        } else {
            res.status(400);
            res.send("null");
        }

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
//
// Payment
//
// create new payment
app.use('/admin/createPayment', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const newPayment = await adminService.createPayment(req.body);
        res.send(newPayment);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
//
// Penalty
//
// create penalty
app.use('/admin/createPenalty', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const newPenalty = await adminService.createPenalty(req.body);
        res.send(newPenalty);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit Penalty
app.use('/admin/editPenalty', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const editedPenalty = await adminService.editPenalty(req.body);
        res.send(editedPenalty);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
//
// Subscription
//
// create new subscription
app.use('/admin/createSubscription', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const newSubscription = await adminService.createSubscription(req.body);
        res.send(newSubscription);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit subscription
app.use('/admin/editSubscription', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const editedSubscription = await adminService.editSubscription(req.body);
        res.send(editedSubscription);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
//
// Record
//
// create new record
app.use('/admin/createRecord', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const newRecord = await adminService.createRecord(req.body);
        res.send(newRecord);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit record
app.use('/admin/editRecord', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === adminAuth.login && password === adminAuth.password) {
        //Admin access granted
        const editedRecord = await adminService.editRecord(req.body);
        res.send(editedRecord);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
/**
 * 
 * Manager services
 * 
 */
//
// Book
//
// create new book
app.use('/manager/createBook', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Manager access granted
        const newBook = await adminService.createBook(req.body);
        res.send(newBook);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit book
app.use('/manager/editBook', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        const editedBook = await adminService.editBook(req.body);
        res.send(editedBook);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// delete book
app.use('/manager/deleteBook', async(req, res, next) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        const deleteBook = await adminService.deleteBook(req.body.id);
        if (deleteBook != null && deleteBook != undefined) {
            res.status(200);
            res.send(deleteBook.toString());
        } else {
            res.status(400);
            res.send("null");
        }

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
app.use('/manager/createAuthor', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        const newAuthor = await adminService.createAuthor(req.body);
        res.send(newAuthor);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit author
app.use('/manager/editAuthor', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        const editedAuthor = await adminService.editAuthor(req.body);
        res.send(editedAuthor);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// delete author
app.use('/manager/deleteAuthor', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        const deleteAuthor = await adminService.deleteAuthor(req.body.id);
        if (deleteAuthor != null && deleteAuthor != undefined) {
            res.status(200);
            res.send(deleteAuthor.toString());
        } else {
            res.status(400);
            res.send("null");
        }

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
app.use('/manager/createPublisher', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        const newPublisher = await adminService.createPublisher(req.body);
        res.send(newPublisher);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit publisher
app.use('/manager/editPublisher', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const editedPublisher = await adminService.editPublisher(req.body);
        res.send(editedPublisher);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// delete publisher
app.use('/manager/deletePublisher', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const deletePublisher = await adminService.deletePublisher(req.body.id);
        if (deletePublisher != null && deletePublisher != undefined) {
            res.status(200);
            res.send(deletePublisher.toString());
        } else {
            res.status(400);
            res.send("null");
        }

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
app.use('/manager/createCategory', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {

        const newCategory = await managerService.createCategory(req.body);
        res.send(newCategory);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit category
app.use('/manager/editCategory', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {

        const editedCategory = await managerService.editCategory(req.body);
        res.send(editedCategory);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// delete category
app.use('/manager/deleteCategory', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {

        const deleteCategory = await managerService.deleteCategory(req.body.id);
        if (deleteCategory != null && deleteCategory != undefined) {
            res.status(200);
            res.send(deleteCategory.toString());
        } else {
            res.status(400);
            res.send("null");
        }
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
app.use('/manager/createUser', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const newUser = await managerService.createUser(req.body);
        res.send(newUser);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit user
app.use('/manager/editUser', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {

        const editedUser = await managerService.editUser(req.body);
        res.send(editedUser);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// delete user
app.use('/manager/deleteUser', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {

        const deleteUser = await managerService.deleteUser(req.body.id);
        if (deleteUser != null && deleteUser != undefined) {
            res.status(200);
            res.send(deleteUser.toString());
        } else {
            res.status(400);
            res.send("null");
        }

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
//
// Inventory
//
// create new inventory item
app.use('/manager/createInventoryItem', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const newItem = await managerService.createInventoryItem(req.body);
        res.send(newItem);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit inventory item
app.use('/manager/editInventoryItem', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const editedItem = await managerService.editInventoryItem(req.body);
        res.send(editedItem);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// delete inventory item
app.use('/manager/deleteInventoryItem', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const deletedItem = await managerService.deleteInventoryItem(req.body.id);
        if (deletedItem != null && deletedItem != undefined) {
            res.status(200);
            res.send(deletedItem.toString());
        } else {
            res.status(400);
            res.send("null");
        }

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
//
// Payment
//
// create new payment
app.use('/manager/createPayment', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const newPayment = await managerService.createPayment(req.body);
        res.send(newPayment);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
//
// Penalty
//
// create penalty
app.use('/manager/createPenalty', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const newPenalty = await managerService.createPenalty(req.body);
        res.send(newPenalty);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit Penalty
app.use('/manager/editPenalty', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const editedPenalty = await managerService.editPenalty(req.body);
        res.send(editedPenalty);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
//
// Subscription
//
// create new subscription
app.use('/manager/createSubscription', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const newSubscription = await managerService.createSubscription(req.body);
        res.send(newSubscription);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit subscription
app.use('/manager/editSubscription', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const editedSubscription = await managerService.editSubscription(req.body);
        res.send(editedSubscription);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
//
// Record
//
// create new record
app.use('/manager/createRecord', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const newRecord = await managerService.createRecord(req.body);
        res.send(newRecord);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit record
app.use('/manager/editRecord', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const editedRecord = await managerService.editRecord(req.body);
        res.send(editedRecord);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
//
// reports
//
// get Most Popular Books
app.use('/manager/getMostPopularBooks', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const mostPopularBooks = await managerService.getMostPopularBooks(req.body);
        res.send(mostPopularBooks);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// get Most Popular Authors
app.use('/manager/getMostPopularAuthors', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const authors = await managerService.getMostPopularAuthors(req.body);
        res.send(authors);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// get Income Report
app.use('/manager/getIncomeReport', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const income = await managerService.getIncomeReport(req.body);
        res.send(income);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// get Most Active Users
app.use('/manager/getMostActiveUsers', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const users = await managerService.getMostActiveUsers(req.body);
        res.send(users);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// get Most Popular Categories
app.use('/manager/getMostPopularCategories', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const categories = await managerService.getMostPopularCategories(req.body);
        res.send(categories);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// get Most Popular Publishers
app.use('/manager/getMostPopularPublishers', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const publishers = await managerService.getMostPopularPublishers(req.body);
        res.send(publishers);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// get Average Time To Read Book
app.use('/manager/getAverageTimeToReadBook', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const time = await managerService.getAverageTimeToReadBook(req.body);
        res.send(time);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// get Unreturned Books And Penalties
app.use('/manager/getUnreturnedBooksAndPenalties', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const books = await managerService.getUnreturnedBooksAndPenalties(req.body);
        res.send(books);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// get Unreturned Books details
app.use('/manager/getUnreturnedBooksAndPenalties', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === managerAuth.login && password === managerAuth.password) {
        //Admin access granted
        const books = await managerService.getUnreturnedBooksDetails(req.body);
        res.send(books);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
/**
 * 
 * Librarian services
 * 
 */
//
// Book
//
// create new book
app.use('/librarian/createBook', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const newBook = await librarianService.createBook(req.body);
        res.send(newBook);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit book
app.use('/librarian/editBook', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        //Admin access granted
        const editedBook = await librarianService.editBook(req.body);
        res.send(editedBook);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// delete book
app.use('/librarian/deleteBook', async(req, res, next) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const deleteBook = await librarianService.deleteBook(req.body.id);
        if (deleteBook != null && deleteBook != undefined) {
            res.status(200);
            res.send(deleteBook.toString());
        } else {
            res.status(400);
            res.send("null");
        }

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
app.use('/librarian/createAuthor', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        //Admin access granted
        const newAuthor = await librarianService.createAuthor(req.body);
        res.send(newAuthor);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit author
app.use('/librarian/editAuthor', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const editedAuthor = await librarianService.editAuthor(req.body);
        res.send(editedAuthor);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// delete author
app.use('/librarian/deleteAuthor', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        //Admin access granted
        const deleteAuthor = await librarianService.deleteAuthor(req.body.id);
        if (deleteAuthor != null && deleteAuthor != undefined) {
            res.status(200);
            res.send(deleteAuthor.toString());
        } else {
            res.status(400);
            res.send("null");
        }

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
app.use('/librarian/createPublisher', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const newPublisher = await librarianService.createPublisher(req.body);
        res.send(newPublisher);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit publisher
app.use('/librarian/editPublisher', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const editedPublisher = await librarianService.editPublisher(req.body);
        res.send(editedPublisher);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// delete publisher
app.use('/librarian/deletePublisher', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const deletePublisher = await librarianService.deletePublisher(req.body.id);
        if (deletePublisher != null && deletePublisher != undefined) {
            res.status(200);
            res.send(deletePublisher.toString());
        } else {
            res.status(400);
            res.send("null");
        }

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
app.use('/librarian/createCategory', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const newCategory = await librarianService.createCategory(req.body);
        res.send(newCategory);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit category
app.use('/librarian/editCategory', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        //Admin access granted
        const editedCategory = await librarianService.editCategory(req.body);
        res.send(editedCategory);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// delete category
app.use('/librarian/deleteCategory', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const deleteCategory = await librarianService.deleteCategory(req.body.id);
        if (deleteCategory != null && deleteCategory != undefined) {
            res.status(200);
            res.send(deleteCategory.toString());
        } else {
            res.status(400);
            res.send("null");
        }
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
app.use('/librarian/createUser', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const newUser = await librarianService.createUser(req.body);
        res.send(newUser);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit user
app.use('/librarian/editUser', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const editedUser = await librarianService.editUser(req.body);
        res.send(editedUser);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});

//
// Inventory
//
// create new inventory item
app.use('/librarian/createInventoryItem', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const newItem = await librarianService.createInventoryItem(req.body);
        res.send(newItem);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit inventory item
app.use('/librarian/editInventoryItem', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const editedItem = await librarianService.editInventoryItem(req.body);
        res.send(editedItem);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// delete inventory item
app.use('/librarian/deleteInventoryItem', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const deletedItem = await librarianService.deleteInventoryItem(req.body.id);
        if (deletedItem != null && deletedItem != undefined) {
            res.status(200);
            res.send(deletedItem.toString());
        } else {
            res.status(400);
            res.send("null");
        }

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});

//
// Penalty
//
// create penalty
app.use('/librarian/createPenalty', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const newPenalty = await librarianService.createPenalty(req.body);
        res.send(newPenalty);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit Penalty
app.use('/librarian/editPenalty', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const editedPenalty = await librarianService.editPenalty(req.body);
        res.send(editedPenalty);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
//
// Subscription
//
// create new subscription
app.use('/librarian/createSubscription', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const newSubscription = await librarianService.createSubscription(req.body);
        res.send(newSubscription);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});

//
// Record
//
// create new record
app.use('/librarian/createRecord', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const newRecord = await librarianService.createRecord(req.body);
        res.send(newRecord);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// edit record
app.use('/librarian/editRecord', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const editedRecord = await librarianService.editRecord(req.body);
        res.send(editedRecord);

    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }

});
// Create Multiple Inventories
app.use('/librarian/createMultipleInventories', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === librarianAuth.login && password === librarianAuth.password) {
        const response = await librarianService.createMultipleInventoriesForBook(req.body.bookId, req.body.quantity, req.body.loanPeriod, req.body.penalty);
        res.send(response);
    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});

/**
 * 
 * Registered User services
 * 
 */
// Borrow Book
app.use('/registeredUser/borrowBook', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === userAuth.login && password === userAuth.password) {
        const response = await registeredUserService.borrowBook(req.body.inventoryId, req.body.userId);
        res.send(response);
    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});
// Return Book
app.use('/registeredUser/returnBook', async(req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === userAuth.login && password === userAuth.password) {
        const response = await registeredUserService.returnBook(req.body.inventoryId, req.body.userId);
        res.send(response);
    } else {
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
        res.status(401).send('Authentication required.'); // custom message
    }
});

/**
 * 
 * untegistered User services (available to all)
 * 
 */
//
// Book
//
// get all books
app.get('/getAllBooks', async(req, res) => {
    console.log(req.query);
    const allBooks = await unregisteredUserService.getAllBooks(1, 10);
    res.send(allBooks);
});
// get book by title
app.get('/getBookByTitle', async(req, res) => {
    console.log(req.query);
    const books = await unregisteredUserService.getBookByTitle(req.body.title, 1, 10);
    res.send(books);
});
// get book by author
app.get('/getBookByAuthor', async(req, res) => {
    console.log(req.query);
    const books = await unregisteredUserService.getBookByAuthor(req.body.author, 1, 10);
    res.send(books);
});
// get book by category
app.get('/getBookByCategory', async(req, res) => {
    console.log(req.query);
    const books = await unregisteredUserService.getBookByCategory(req.body.category, 1, 10);
    res.send(books);
});
// get book by publisher
app.get('/getBookByPublisher', async(req, res) => {
    console.log(req.query);
    const books = await unregisteredUserService.getBookByPublisher(req.body.publisher, 1, 10);
    res.send(books);
});
// get book by year
app.get('/getBookByYear', async(req, res) => {
    console.log(req.query);
    const books = await unregisteredUserService.getBookByYear(req.body.year, 1, 10);
    res.send(books);
});
//
// Author
//
// get all authors
app.get('/getAllAuthors', async(req, res) => {
    console.log(req.query);
    const allAuthors = await unregisteredUserService.getAllAuthors(1, 10);
    res.send(allAuthors);
});
// get author by name
app.get('/getAuthorByName', async(req, res) => {
    console.log(req.query);
    const authors = await unregisteredUserService.getAuthorByName(req.body.name, 1, 10);
    res.send(authors);
});
// get author by nationality
app.get('/getAuthorByNationality', async(req, res) => {
    console.log(req.query);
    const authors = await unregisteredUserService.getAuthorByNationality(req.body.nationality, 1, 10);
    res.send(authors);
});
//
// publisher
//
// get all publishers
app.get('/getAllPublishers', async(req, res) => {
    console.log(req.query);
    const allPublishers = await unregisteredUserService.getAllPublishers(1, 10);
    res.send(allPublishers);
});
// get publisher by name
app.get('/getPublisherByName', async(req, res) => {
    console.log(req.query);
    const publishers = await unregisteredUserService.getPublisherByName(req.body.name, 1, 10);
    res.send(publishers);
});
//
// Category
//
// get all categories
app.get('/getAllCategories', async(req, res) => {
    console.log(req.query);
    const allCategories = await unregisteredUserService.getAllCategories();
    res.send(allCategories);
});
// get category by name
app.get('/getCategoryByName', async(req, res) => {
    console.log(req.query);
    const categories = await unregisteredUserService.getCategoryByName(req.body.name, 1, 10);
    res.send(categories);
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});