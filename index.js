const express = require("express")
const app = express()

// View engine

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

var data = new Date() // Capture a data universal
var dataBrasilia = new Date(data.valueOf() - data.getTimezoneOffset() * 60000)

app.get("/", (req,res) => {
    res.render("index")
})

app.listen(8080,() => {
    console.log("Servidor rodando")
} )