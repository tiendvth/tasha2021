const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8888;
const session = require('express-session')
const mongoose = require('mongoose');
const Article = require('./models/article')
const adminProductRouter = require('./routes/admin-products-routes');
const adminCategoryRouter = require('./routes/admin-categories-routes');
const adminHomeRouter = require('./routes/admin-home-routes');
const userProductRouter = require('./routes/user-products-routes');
const adminUserRouter = require('./routes/admin-users-routes');
const userPostRouter = require('./routes/user-post-routes');
const homeRouter = require('./routes/home-routes');
const adminArticleRouter = require('./routes/admin-article-routes');
const postMessageRouter = require('./routes/post-message-routes');
const adminMessageRouter = require('./routes/admin-message-routes');

const checkAdminMiddleWare = require('./middleware/check-loggin-admin');
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'some secret',
    cookie: {maxAge: 60 * 60 * 1000}
}));
mongoose.connect('mongodb+srv://admin:admin@cluster0.mxqfx.mongodb.net/project_demo_01?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


app.set('Views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/admin', checkAdminMiddleWare);
app.use('/admin/products', adminProductRouter);
app.use('/admin/categories', adminCategoryRouter);
app.use('/admin/home', adminHomeRouter);
app.use('/admin/article', adminArticleRouter);
app.use('/products', userProductRouter);
app.use('/admin/users', adminUserRouter);
app.use('/post/message',postMessageRouter);
app.use('/admin/message',adminMessageRouter);
app.use('/users', userPostRouter);
app.use('/', homeRouter)
app.get('/403', function (req, res) {
    const data = {
        title : 'Error 403'
    }
    res.render('admin/403',{data : data});
})
app.get('/manual', function (req, res) {
    const data = {user: req.session.user}
    res.render('manual', {data: data});
})
app.get('/contact', function (req, res) {
    const data = {user: req.session.user}
    res.render('contact', {data: data});
})
app.get('/expert-tip', async function (req, res) {
    const listArticle = await Article.find({status: 1});
    const data = {user: req.session.user, listArticle: listArticle}
    res.render('expert_tip', {data: data});
})
app.get('/expert-tip/:id', async function(req,res){
    const detailArticle = await Article.findById(req.params.id);
    const data = {user: req.session.user, detailArticle: detailArticle}
    res.render('article-details',{data:data})
})
app.get('/feedback', function (req, res) {
    const data = {user: req.session.user}
    res.render('feedback', {data: data});
})
app.get('/register-complaint', function (req, res) {
    const data = {user: req.session.user}
    res.render('register_complaint', {data: data});
})
// app.get('/products', function (req, res) {
//     res.render('products');
// })
// app.get('/product-details', function (req, res) {
//     res.render('product_details',{user:req.session.user});
// })
app.listen( process.env.PORT || port, function () {
    console.log('Ohayo world'+ port);
})