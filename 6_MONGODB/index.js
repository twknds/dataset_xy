
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/my_database', {

    useNewUrlParser: true
});
const express = require('express')
const db = mongoose.connection
db.once('open', () => {
    console.log("connected...")
})

const app = new express()
const ejs = require('ejs')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const validateMiddleware = require("./middleware/validationMiddleware");
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')

const newPostController = require('./controllers/newPost');
const newPost = require('./controllers/newPost.js');
app.get('/',homeController)
app.get('/post/:id',getPostController)
app.post('/posts/store',storePostController)
app.get('/posts/new',newPostController)

app.listen(4000, () => { console.log('App listening on port 4000') })