const express = require("express")
const router = express.Router()

router.get('/articles', (req, res) => {
    res.send("rota de artigos")
})

router.get('/admin/articles/new', (req, res) => {
    res.send("Rota para criar uma nova artigos")
})

module.exports = router