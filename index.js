const express = require("express")
const app = express()
const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")
const connection = require("./database/database")

const Category = require("./categories/Category")
const Article = require("./articles/Article")




// View engine

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

var data = new Date() // Capture a data universal
var dataBrasilia = new Date(data.valueOf() - data.getTimezoneOffset() * 60000)

connection.authenticate().then(() => {
    console.log("Conexão feita com sucesso")
}).catch((error) => {
    console.log(error)
})

app.use("/", categoriesController)
app.use("/", articlesController)

app.get("/", (req,res) => {
    res.render("index")
})

app.listen(8080,() => {
    console.log("Servidor rodando")
} )