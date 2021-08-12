const express = require("express")
const router = express.Router()
const Category = require("../categories/Category")
const Article = require('./Article')
const slugify = require("slugify")

var data = new Date() // Capture a data universal
var dataBrasilia = new Date(data.valueOf() - data.getTimezoneOffset() * 60000)

router.get("/admin/articles", (req, res) => {
    res.send("Rota de Artigos")
})

router.get('/admin/articles/new', (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new", {categories: categories})
    })
    
})

router.post("/article/save", (req, res) => {
    let title = req.body.title
    let body = req.body.body
    let category = req.body.category

    Article.create({
        title: title,
        slug: slugify(title),
        body: body, 
        categoryId: category, 
        createdAt: dataBrasilia,
        updatedAt: dataBrasilia
    }).then(() => {
        res.redirect("/admin/articles")
    })
})

module.exports = router