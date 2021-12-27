const Author = require('./Author');
const Book = require('./Book');
const Category = require('./Category');


Book.belongsTo(Author, { foreignKey: 'author_id' })
Author.hasMany(Book, { foreignKey: 'author_id' })

Book.belongsTo(Category, { foreignKey: 'category_id' })
Category.hasMany(Book, { foreignKey: 'category_id' })

module.exports = {
    Book,
    Author,
    Category
}