const Sequelize = require("sequelize")
const connection = require("../database/database")
const Category = require("../categories/Category")

const Article = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false },
    slug: {
            type: Sequelize.STRING,
            allowNull: false},
    body: {
            type: Sequelize.TEXT,
            allowNull: false}
})

// Definindo relacionamento

Category.hasMany(Article) // Uma categoria possui muitos artigos
Article.belongsTo(Category) // um artigo possui uma categoria

// Article.sync({force: true}) criação da tabela, executar só uma vez

module.exports = Article