const express =require('express')
const router = express.Router()
const mongoose = require('mongoose')
const mutler = require('multer')
const upload = mutler({dest: '/uploads/'})
const app =express()
app.set("view engine", "ejs");
app.get("/upload", (req, res) => {
    res.render("upload")
})