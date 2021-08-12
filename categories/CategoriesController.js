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
    if(title != undefined && title != ""){

        Category.create({
            title: title,
            slug: slugify(title),
            createdAt: dataBrasilia,
            updatedAt: dataBrasilia
        }).then(() => {
            res.redirect("/admin/categories")
        })

    }else{
        res.redirect("/admin/categories/new")
    }
})


router.get('/admin/categories', (req, res) => {

    Category.findAll().then(categories => {
        res.render("admin/categories/index", {categories: categories})
    })
})

router.post('/categories/delete', (req, res) => {
    let id = req.body.id
    
    if(id != undefined){
        if(!isNaN(id)){
            Category.destroy({where: {id:id}}).then(() => {
                res.redirect("/admin/categories")
            })
        }else{
            res.redirect("/admin/categories")
        }
    }else{
        res.redirect("/admin/categories")
    }
})

module.exports = router