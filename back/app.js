const express = require("express");
const cors = require('cors')
    //const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const btoa = require('btoa');
const port = 3000;
// DB
const db = require("../back/config/database");
// DB Test
//const dbTest = require("../back/tests/databaseServices");

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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});