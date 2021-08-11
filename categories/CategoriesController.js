const express = require("express")
const router = express.Router()
const Category = require('./Category')
const slugify = require("slugify")

var data = new Date() // Capture a data universal
var dataBrasilia = new Date(data.valueOf() - data.getTimezoneOffset() * 60000)

router.get('/admin/categories/new', (req, res) => {
    res.render("admin/categories/new")
})

router.post('/categories/save', (req, res) => {
    let title = undefined
    title = req.body.title
    console.log( "a" + title)
    if(title != undefined && title != ""){

        Category.create({
            title: title,
            slug: slugify(title),
            createdAt: dataBrasilia,
            updatedAt: dataBrasilia
        }).then(() => {
            res.redirect("/")
        })

    }else{
        res.redirect("/admin/categories/new")
    }
})

module.exports = router