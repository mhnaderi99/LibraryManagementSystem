const Author = require('./Author');
const Book = require('./Book');
const Category = require('./Category');
const Publisher = require('./Publisher');


Book.belongsTo(Author, { foreignKey: 'author_id' })
Author.hasMany(Book, { foreignKey: 'author_id' })

Book.belongsTo(Category, { foreignKey: 'category_id' })
Category.hasMany(Book, { foreignKey: 'category_id' })

Book.belongsTo(Publisher, { foreignKey: 'publisher_id' })
Publisher.hasMany(Book, { foreignKey: 'publisher_id' })

module.exports = {
    Book,
    Author,
    Category,
    Publisher
}