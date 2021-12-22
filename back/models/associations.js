const Author = require('./Author');
const Book = require('./Book');


Book.belongsTo(Author, {foreignKey: 'author_id'})
Author.hasMany(Book, {foreignKey: 'author_id'})


module.exports = {
    Book,
    Author
}